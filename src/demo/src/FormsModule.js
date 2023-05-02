"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.keymap = exports.FormsModule = void 0;
var Minimized_1 = require("./Minimized");
var FormHeader_1 = require("./fragments/FormHeader");
var PageHeader_1 = require("./fragments/PageHeader");
var PageFooter_1 = require("./fragments/PageFooter");
var Menu_1 = require("./menus/topmenu/Menu");
var Menu_2 = require("./menus/leftmenu/Menu");
var Menu_3 = require("./menus/rightclick/Menu");
var Fields_1 = require("./fields/Fields");
var Jobs_1 = require("./forms/jobs/Jobs");
var Countries_1 = require("./forms/countries/Countries");
var Locations_1 = require("./forms/locations/Locations");
var Employees_1 = require("./forms/employees/Employees");
var Departments_1 = require("./forms/departments/Departments");
var MasterDetail_1 = require("./forms/masterdetail/MasterDetail");
var PhoneBookMembased_1 = require("./forms/phonenook/PhoneBookMembased");
var AppHeader_1 = require("./tags/AppHeader");
var LinkMapper_1 = require("./fields/LinkMapper");
var TrueFalseMapper_1 = require("./fields/TrueFalseMapper");
var forms42core_1 = require("forms42core");
var FormsModule = /** @class */ (function (_super) {
    __extends(FormsModule, _super);
    function FormsModule() {
        var _this = _super.call(this) || this;
        _this.topmenu = null;
        _this.leftmenu = null;
        _this.list = null;
        _this.jobs = new forms42core_1.KeyMap({ key: 'J', ctrl: true });
        _this.fields = new forms42core_1.KeyMap({ key: 'F', ctrl: true });
        _this.countries = new forms42core_1.KeyMap({ key: 'C', ctrl: true });
        _this.locations = new forms42core_1.KeyMap({ key: 'L', ctrl: true });
        _this.phonebook = new forms42core_1.KeyMap({ key: 'P', ctrl: true });
        _this.employees = new forms42core_1.KeyMap({ key: 'E', ctrl: true });
        _this.departments = new forms42core_1.KeyMap({ key: 'D', ctrl: true });
        _this.masterdetail = new forms42core_1.KeyMap({ key: 'M', ctrl: true });
        _this.logontrg = null;
        // Demo cutom tag
        forms42core_1.FormProperties.TagLibrary.set("AppHeader", AppHeader_1.AppHeader);
        _this.parse();
        _this.list = new Minimized_1.Minimized();
        // Menues
        _this.topmenu = new Menu_1.Menu();
        _this.leftmenu = new Menu_2.Menu();
        _this.updateKeyMap(keymap);
        forms42core_1.DatabaseConnection.TRXTIMEOUT = 240;
        forms42core_1.DatabaseConnection.CONNTIMEOUT = 120;
        FormsModule_1.DATABASE = new forms42core_1.DatabaseConnection();
        _this.addEventListener(_this.close, { type: forms42core_1.EventType.Key, key: keymap.close });
        _this.addEventListener(_this.login, { type: forms42core_1.EventType.Key, key: keymap.login });
        _this.addEventListener(_this.showTopMenu, { type: forms42core_1.EventType.Key, key: keymap.topmenu });
        _this.addEventListener(_this.showLeftMenu, { type: forms42core_1.EventType.Key, key: keymap.leftmenu });
        // this.addEventListener(this.rightmenu,{type: EventType.Mouse, mouse: MouseMap.contextmenu},);
        _this.addEventListener(_this.open, [
            { type: forms42core_1.EventType.Key, key: _this.jobs },
            { type: forms42core_1.EventType.Key, key: _this.fields },
            { type: forms42core_1.EventType.Key, key: _this.countries },
            { type: forms42core_1.EventType.Key, key: _this.locations },
            { type: forms42core_1.EventType.Key, key: _this.phonebook },
            { type: forms42core_1.EventType.Key, key: _this.employees },
            { type: forms42core_1.EventType.Key, key: _this.departments },
            { type: forms42core_1.EventType.Key, key: _this.masterdetail }
        ]);
        _this.OpenURLForm();
        return _this;
    }
    FormsModule_1 = FormsModule;
    FormsModule.prototype.open = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (event.key == this.jobs)
                    this.showform(Jobs_1.Jobs);
                if (event.key == this.fields)
                    this.showform(Fields_1.Fields);
                if (event.key == this.employees)
                    this.showform(Employees_1.Employees);
                if (event.key == this.departments)
                    this.showform(Departments_1.Departments);
                if (event.key == this.countries)
                    this.showform(Countries_1.Countries);
                if (event.key == this.locations)
                    this.showform(Locations_1.Locations);
                if (event.key == this.phonebook)
                    this.showform(PhoneBookMembased_1.PhoneBookMembased);
                if (event.key == this.masterdetail)
                    this.showform(MasterDetail_1.MasterDetail);
                return [2 /*return*/, (true)];
            });
        });
    };
    FormsModule.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usrpwd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showform(forms42core_1.UsernamePassword)];
                    case 1:
                        usrpwd = _a.sent();
                        this.logontrg = this.addFormEventListener(usrpwd, this.onLogon, { type: forms42core_1.EventType.OnCloseForm });
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    FormsModule.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var forms, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!FormsModule_1.DATABASE.connected())
                            return [2 /*return*/, (true)];
                        forms = this.getRunningForms();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < forms.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, forms[i].clear()];
                    case 2:
                        if (!(_a.sent()))
                            return [2 /*return*/, (false)];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, (FormsModule_1.DATABASE.disconnect())];
                }
            });
        });
    };
    FormsModule.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                form = this.getCurrentForm();
                if (form != null)
                    return [2 /*return*/, (form.close())];
                return [2 /*return*/, (true)];
            });
        });
    };
    FormsModule.prototype.onLogon = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = event.form;
                        this.removeEventListener(this.logontrg);
                        if (!(form.accepted && form.username && form.password)) return [3 /*break*/, 2];
                        return [4 /*yield*/, FormsModule_1.DATABASE.connect(form.username, form.password)];
                    case 1:
                        if (!(_a.sent()))
                            this.login();
                        _a.label = 2;
                    case 2: return [2 /*return*/, (true)];
                }
            });
        });
    };
    FormsModule.prototype.showTopMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.topmenu.focus();
                return [2 /*return*/, (true)];
            });
        });
    };
    FormsModule.prototype.showLeftMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.leftmenu.display();
                this.leftmenu.focus();
                return [2 /*return*/, (true)];
            });
        });
    };
    FormsModule.prototype.rightmenu = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var mouseevent;
            return __generator(this, function (_a) {
                mouseevent = this.getJSEvent();
                new Menu_3.Menu(mouseevent, event);
                return [2 /*return*/, (true)];
            });
        });
    };
    var FormsModule_1;
    FormsModule.DATABASE = null;
    FormsModule = FormsModule_1 = __decorate([
        (0, forms42core_1.FormsPathMapping)([
            { "class": Fields_1.Fields, path: "/forms/fields" },
            { "class": Jobs_1.Jobs, path: "/forms/jobs" },
            { "class": Countries_1.Countries, path: "/forms/countries" },
            { "class": Locations_1.Locations, path: "/forms/locations" },
            { "class": Employees_1.Employees, path: "/forms/employees" },
            { "class": Departments_1.Departments, path: "/forms/departments" },
            { "class": MasterDetail_1.MasterDetail, path: "/forms/masterdetail" },
            { "class": PhoneBookMembased_1.PhoneBookMembased, path: "/forms/phonebook" },
            { "class": FormHeader_1.FormHeader, path: "/html/formheader" },
            { "class": PageHeader_1.PageHeader, path: "/html/pageheader" },
            { "class": PageFooter_1.PageFooter, path: "/html/pagefooter" },
            { "class": LinkMapper_1.LinkMapper, path: "/mappers/linkmapper" },
            { "class": TrueFalseMapper_1.TrueFalseMapper, path: "/mappers/truefalse" },
        ])
    ], FormsModule);
    return FormsModule;
}(forms42core_1.FormsModule));
exports.FormsModule = FormsModule;
var keymap = /** @class */ (function (_super) {
    __extends(keymap, _super);
    function keymap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    keymap.close = new forms42core_1.KeyMap({ key: 'w', ctrl: true });
    keymap.login = new forms42core_1.KeyMap({ key: 'l', ctrl: true });
    keymap.topmenu = new forms42core_1.KeyMap({ key: 'm', ctrl: true });
    keymap.leftmenu = new forms42core_1.KeyMap({ key: 'f', ctrl: true });
    return keymap;
}(forms42core_1.KeyMap));
exports.keymap = keymap;
