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

import { DataType } from "../DataType.js";
import { DataMapper, Tier } from "../DataMapper.js";
import { dates } from "../../../model/dates/dates.js";
import { FieldProperties } from "../FieldProperties.js";
import { FieldFeatureFactory } from "../../FieldFeatureFactory.js";
import { BrowserEvent } from "../../../control/events/BrowserEvent.js";
import { FieldEventHandler } from "../interfaces/FieldEventHandler.js";
import { FieldImplementation, FieldState } from "../interfaces/FieldImplementation.js";

export class Radio implements FieldImplementation, EventListenerObject
{
	private state:FieldState = null;
	private datamapper:DataMapper = null;
	private properties:FieldProperties = null;
	private eventhandler:FieldEventHandler = null;

	private value$:string = null;
	private checked:string = null;
	private element:HTMLInputElement = null;
	private datatype$:DataType = DataType.string;
   private event:BrowserEvent = BrowserEvent.get();

	public get datatype() : DataType
	{
		return(this.datatype$);
	}

	public set datatype(type:DataType)
	{
		this.datatype = type;
	}

	public create(eventhandler:FieldEventHandler, _tag:string) : HTMLInputElement
	{
		this.element = document.createElement("input");
		this.eventhandler = eventhandler;
		return(this.element);
	}

	public apply(properties:FieldProperties, init:boolean) : void
	{
		this.properties = properties;
		this.checked = properties.value;
		this.datamapper = properties.mapper;
		if (init) this.addEvents(this.element);
		this.setAttributes(properties.getAttributes());
	}

	public clear() : void
	{
		this.value$ = null;
		this.element.checked = false;
	}

	public getValue() : any
	{
		if (this.datamapper != null)
		{
			this.value$ = this.datamapper.getValue(Tier.Backend);
			if (this.value$ == null) this.element.checked = false;
			return(this.value$);
		}

		if (this.datatype$ == DataType.boolean)
			return((""+this.value$).toLowerCase() == "true");

		if (DataType[this.datatype$].startsWith("date"))
		{
			let value:Date = dates.parse(this.value$);
			if (value == null) this.element.checked = false;
			return(value);
		}

		if (this.datatype$ == DataType.integer || this.datatype$ == DataType.decimal)
			return(+this.value$);

		return(this.value$);
	}

	public setValue(value:any) : boolean
	{
		if (this.datamapper != null)
		{
			this.datamapper.setValue(Tier.Backend,value);
			value = this.datamapper.getValue(Tier.Frontend);
		}

		if (this.datatype$ == DataType.boolean)
		{
				value = ((""+value).toLowerCase() == "true");
		}

		if (DataType[this.datatype$].startsWith("date"))
		{
			if (typeof value === "number")
				value = new Date(+value);

			if (value instanceof Date)
				value = dates.format(value);
		}

		this.value$ = value;
		let comp:string = "";

		if (value != null) comp = value+"";
		this.element.checked = (comp == this.checked);

		return(true);
	}

	public getIntermediateValue() : string
	{
		return(this.getValue());
	}

	public setIntermediateValue(value:string) : void
	{
		this.setValue(value);
	}

	public getElement() : HTMLElement
	{
		return(this.element);
	}

	public getFieldState() : FieldState
	{
		return(this.state);
	}

	public setFieldState(state:FieldState) : void
	{
		this.state = state;
		let enabled:boolean = this.properties.enabled;
		let readonly:boolean = this.properties.readonly;

		switch(state)
		{
			case FieldState.OPEN:
				if (enabled) FieldFeatureFactory.setEnabledState(this.element,this.properties,true);
				if (!readonly) FieldFeatureFactory.setReadOnlyState(this.element,this.properties,false);
				break;

			case FieldState.READONLY:
				if (enabled) FieldFeatureFactory.setEnabledState(this.element,this.properties,true);
				FieldFeatureFactory.setReadOnlyState(this.element,this.properties,true);
				break;

			case FieldState.DISABLED:
				FieldFeatureFactory.setEnabledState(this.element,this.properties,false);
				break;
			}
	}


	public setAttributes(attributes:Map<string,string>) : void
	{
		this.datatype$ = DataType.string;

		attributes.forEach((_value,attr) =>
        {
			if (attr == "date")
				this.datatype$ = DataType.date;

			if (attr == "datetime")
				this.datatype$ = DataType.datetime;

			if (attr == "boolean")
				this.datatype$ = DataType.boolean;

			if (attr == "integer")
				this.datatype$ = DataType.integer;

			if (attr == "decimal")
				this.datatype$ = DataType.decimal;
		});
	}

	public async handleEvent(event:Event) : Promise<void>
	{
      let bubble:boolean = false;
		this.event.setEvent(event);

		if (this.event.type == "wait")
			await this.event.wait();

		if (this.event.waiting)
			return;

		if (this.event.type == "focus")
			bubble = true;

		if (this.event.type == "blur")
			bubble = true;

		if (this.event.type == "change")
		{
			bubble = true;
			this.value$ = this.getElementValue();

			if (!this.element.checked)
				this.value$ = null;
		}

		if (this.event.accept || this.event.cancel)
			bubble = true;

		if (this.event.bubbleMouseEvent)
			bubble = true;

		if (this.event.onScrollUp)
			bubble = true;

      if (this.event.onScrollDown)
			bubble = true;

      if (this.event.onCtrlKeyDown)
			bubble = true;

      if (this.event.onFuncKey)
			bubble = true;

		this.event.preventDefault();

		if (this.event.ignore) return;
		if (this.event.custom) bubble = true;

		if (bubble)
			await this.eventhandler.handleEvent(this.event);
	}

	private getElementValue() : string
	{
		return(this.element.value);
	}

	private addEvents(element:HTMLElement) : void
	{
		element.addEventListener("blur",this);
		element.addEventListener("focus",this);
		element.addEventListener("change",this);

		element.addEventListener("keyup",this);
		element.addEventListener("keydown",this);
		element.addEventListener("keypress",this);

		element.addEventListener("wheel",this);
		element.addEventListener("mouseup",this);
		element.addEventListener("mouseout",this);
		element.addEventListener("mousedown",this);
		element.addEventListener("mouseover",this);
		element.addEventListener("mousemove",this);

		element.addEventListener("drop",this);

		element.addEventListener("drag",this);
		element.addEventListener("dragend",this);
		element.addEventListener("dragover",this);
		element.addEventListener("dragstart",this);
		element.addEventListener("dragenter",this);
		element.addEventListener("dragleave",this);

		element.addEventListener("click",this);
		element.addEventListener("dblclick",this);
		element.addEventListener("contextmenu",this);
	}
}