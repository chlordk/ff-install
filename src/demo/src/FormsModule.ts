/*
  MIT License

  Copyright © 2023 Alex Høffner

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
  and associated documentation files (the “Software”), to deal in the Software without
  restriction, including without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or
  substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
  BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { Minimized } from './Minimized';

import { FormHeader } from './fragments/FormHeader';
import { PageHeader } from './fragments/PageHeader';
import { PageFooter } from './fragments/PageFooter';

import { Menu as TopMenu } from './menus/topmenu/Menu';
import { Menu as LeftMenu } from './menus/leftmenu/Menu';
import { Menu as RightClick } from './menus/rightclick/Menu';

import { Fields } from './fields/Fields';
import { Jobs } from './forms/jobs/Jobs';
import { Countries } from './forms/countries/Countries';
import { Locations } from './forms/locations/Locations';
import { Employees } from './forms/employees/Employees';
import { Departments } from './forms/departments/Departments';
import { MasterDetail } from './forms/masterdetail/MasterDetail';
import { PhoneBookMembased } from './forms/phonenook/PhoneBookMembased';

import { AppHeader } from './tags/AppHeader';
import { LinkMapper } from './fields/LinkMapper';
import { TrueFalseMapper } from './fields/TrueFalseMapper';

import { FormsPathMapping, FormsModule as FormsCoreModule, KeyMap, FormEvent, EventType, DatabaseConnection as Connection, FormProperties, UsernamePassword, Form, MouseMap } from 'forms42core';

@FormsPathMapping(
	[
		{class: Fields, path: "/forms/fields"},

		{class: Jobs, path: "/forms/jobs"},
		{class: Countries, path: "/forms/countries"},
		{class: Locations, path: "/forms/locations"},
		{class: Employees, path: "/forms/employees"},
		{class: Departments, path: "/forms/departments"},
		{class: MasterDetail, path: "/forms/masterdetail"},

		{class: PhoneBookMembased, path: "/forms/phonebook"},

		{class: FormHeader, path: "/html/formheader"},
		{class: PageHeader, path: "/html/pageheader"},
		{class: PageFooter, path: "/html/pagefooter"},
		{class: LinkMapper, path: "/mappers/linkmapper"},
		{class: TrueFalseMapper, path: "/mappers/truefalse"},
	]
)

export class FormsModule extends FormsCoreModule
{
	public topmenu:TopMenu = null;
	public leftmenu:LeftMenu = null;

	public list:Minimized = null;
	public static DATABASE:Connection = null;

	private jobs:KeyMap = new KeyMap({key: 'J', ctrl: true});
	private fields:KeyMap = new KeyMap({key: 'F', ctrl: true});
	private countries:KeyMap = new KeyMap({key: 'C', ctrl: true});
	private locations:KeyMap = new KeyMap({key: 'L', ctrl: true});
	private phonebook:KeyMap = new KeyMap({key: 'P', ctrl: true});
	private employees:KeyMap = new KeyMap({key: 'E', ctrl: true});
	private departments:KeyMap = new KeyMap({key: 'D', ctrl: true});
	private masterdetail:KeyMap = new KeyMap({key: 'M', ctrl: true});

	constructor()
	{
		super();

		// Demo cutom tag
		FormProperties.TagLibrary.set("AppHeader",AppHeader);

		this.parse();
		this.list = new Minimized();

		// Menues
		this.topmenu = new TopMenu();
		this.leftmenu = new LeftMenu();

		this.updateKeyMap(keymap);

		Connection.TRXTIMEOUT = 240;
		Connection.CONNTIMEOUT = 120;

		FormsModule.DATABASE = new Connection();

		this.addEventListener(this.close,{type: EventType.Key, key: keymap.close});
		this.addEventListener(this.login,{type: EventType.Key, key: keymap.login});

		this.addEventListener(this.showTopMenu,{type: EventType.Key, key: keymap.topmenu});
		this.addEventListener(this.showLeftMenu,{type: EventType.Key, key: keymap.leftmenu});

		// this.addEventListener(this.rightmenu,{type: EventType.Mouse, mouse: MouseMap.contextmenu},);

		this.addEventListener(this.open,
		[
			{type:EventType.Key,key:this.jobs},
			{type:EventType.Key,key:this.fields},
			{type:EventType.Key,key:this.countries},
			{type:EventType.Key,key:this.locations},
			{type:EventType.Key,key:this.phonebook},
			{type:EventType.Key,key:this.employees},
			{type:EventType.Key,key:this.departments},
			{type:EventType.Key,key:this.masterdetail}
		]);

		this.OpenURLForm();
	}

	private async open(event:FormEvent) : Promise<boolean>
	{
		if (event.key == this.jobs)
			this.showform(Jobs);

		if (event.key == this.fields)
			this.showform(Fields);

		if (event.key == this.employees)
			this.showform(Employees);

		if (event.key == this.departments)
			this.showform(Departments);

		if (event.key == this.countries)
			this.showform(Countries);

		if (event.key == this.locations)
			this.showform(Locations);

		if (event.key == this.phonebook)
			this.showform(PhoneBookMembased);

		if (event.key == this.masterdetail)
			this.showform(MasterDetail);

		return(true);
	}

	private logontrg:object = null;
	public async login() : Promise<boolean>
	{
		let usrpwd:Form = await this.showform(UsernamePassword);
		this.logontrg = this.addFormEventListener(usrpwd,this.onLogon,{type: EventType.OnCloseForm});
		return(true);
	}

	public async logout() : Promise<boolean>
	{
		if (!FormsModule.DATABASE.connected())
			return(true);

		let forms:Form[] = this.getRunningForms();

		for (let i = 0; i < forms.length; i++)
		{
			if (!await forms[i].clear())
				return(false);
		}

		return(FormsModule.DATABASE.disconnect());
	}

	public async close() : Promise<boolean>
	{
		let form:Form = this.getCurrentForm();
		if (form != null) return(form.close());
		return(true);
	}

	private async onLogon(event:FormEvent) : Promise<boolean>
	{
		let form:UsernamePassword = event.form as UsernamePassword;
		this.removeEventListener(this.logontrg);

		if (form.accepted && form.username && form.password)
		{
			if (!await FormsModule.DATABASE.connect(form.username,form.password))
				this.login();
		}

		return(true);
	}

	public async showTopMenu() : Promise<boolean>
	{
		this.topmenu.focus();
		return(true);
	}

	public async showLeftMenu() : Promise<boolean>
	{
		this.leftmenu.display();
		this.leftmenu.focus();
		return(true);
	}

	private async rightmenu(event: FormEvent) : Promise<boolean>
	{

		let mouseevent: MouseEvent = this.getJSEvent() as MouseEvent;

		new RightClick(mouseevent,event);
		return(true);
	}
}

export class keymap extends KeyMap
{
	public static close:KeyMap = new KeyMap({key: 'w', ctrl: true});
	public static login:KeyMap = new KeyMap({key: 'l', ctrl: true});
	public static topmenu:KeyMap = new KeyMap({key: 'm', ctrl: true});
	public static leftmenu:KeyMap = new KeyMap({key: 'f', ctrl: true});
}
