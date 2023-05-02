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
exports.Employees = void 0;
var Jobs_1 = require("./Jobs");
var WorkDays_1 = require("../dates/WorkDays");
var Departments_1 = require("./Departments");
var Jobs_2 = require("../datasources/database/Jobs");
var Employees_1 = require("../datasources/database/Employees");
var Departments_2 = require("../datasources/database/Departments");
var forms42core_1 = require("forms42core");
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(form, name) {
        var _this = _super.call(this, form, name) || this;
        _this.datasource = new Employees_1.Employees();
        _this.setDateConstraint(new WorkDays_1.WorkDays(), "hire_date");
        return _this;
    }
    Employees.prototype.setDefaults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var today;
            return __generator(this, function (_a) {
                today = new Date();
                today.setHours(0, 0, 0, 0);
                this.setValue("hire_date", today);
                return [2 /*return*/, (true)];
            });
        });
    };
    Employees.prototype.getDerivedFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var code, title, field;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = null;
                        title = null;
                        field = null;
                        field = "job_title";
                        if (!this.hasField(field)) return [3 /*break*/, 3];
                        code = this.getValue("job_id");
                        if (!(code != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Jobs_2.Jobs.getTitle(code)];
                    case 1:
                        title = _a.sent();
                        _a.label = 2;
                    case 2:
                        this.setValue(field, title);
                        _a.label = 3;
                    case 3:
                        field = "department_name";
                        if (!this.hasField(field)) return [3 /*break*/, 6];
                        code = this.getValue("department_id");
                        if (!(code != null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Departments_2.Departments.getTitle(code)];
                    case 4:
                        title = _a.sent();
                        _a.label = 5;
                    case 5:
                        this.setValue(field, title);
                        _a.label = 6;
                    case 6: return [2 /*return*/, (true)];
                }
            });
        });
    };
    Employees.prototype.validateSalary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var code, salary, limit, props;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = this.getValue("job_id");
                        salary = this.getValue("salary");
                        if (code == null || salary == null)
                            return [2 /*return*/, (true)];
                        return [4 /*yield*/, Jobs_2.Jobs.getSalaryLimit(code)];
                    case 1:
                        limit = _a.sent();
                        if (limit[0] != null) {
                            this.setValid("salary", true);
                            this.setValid("job_id", true);
                        }
                        if (salary < limit[0] * 0.75 || salary > 1.25 * limit[1]) {
                            this.warning("Salary is out of range (" + (limit[0] * 0.75) + " - " + (1.25 * limit[1]) + " ) ", "Validate Salary");
                            return [2 /*return*/, (false)];
                        }
                        if (salary < limit[0] || salary > limit[1]) {
                            props = null;
                            this.form.warning("Salary should be between " + limit[0] + " and " + limit[1], "Validation");
                            props = this.getRecord().getProperties("last_name");
                            this.getRecord().setProperties(props.setStyle("color", "deeppink"), "last_name");
                            props = this.getRecord().getProperties("first_name");
                            this.getRecord().setProperties(props.setStyle("color", "deeppink"), "first_name");
                            props = this.getRecord().getProperties("salary");
                            this.getRecord().setProperties(props.setStyle("color", "deeppink"), "salary");
                        }
                        else {
                            this.getRecord().clearProperties("salary");
                            this.getRecord().clearProperties("last_name");
                            this.getRecord().clearProperties("first_name");
                        }
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    Employees.prototype.validateJob = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var success, field, code, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        success = true;
                        field = "job_title";
                        code = this.getValue("job_id");
                        if (code == null) {
                            if (this.hasField(field))
                                this.setValue(field, null);
                            return [2 /*return*/, (true)];
                        }
                        return [4 /*yield*/, Jobs_2.Jobs.getTitle(code)];
                    case 1:
                        title = _a.sent();
                        if (this.hasField(field))
                            this.setValue(field, title);
                        if (!(event.type == forms42core_1.EventType.WhenValidateField && !this.queryMode())) return [3 /*break*/, 3];
                        if (title == null) {
                            this.form.warning("Invalid job code", "Employees");
                            return [2 /*return*/, (false)];
                        }
                        return [4 /*yield*/, this.validateSalary()];
                    case 2:
                        success = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, (success)];
                }
            });
        });
    };
    Employees.prototype.validateDepartment = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var field, code, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        field = "department_name";
                        code = this.getValue("department_id");
                        if (code == null) {
                            if (this.hasField(field))
                                this.setValue(field, null);
                            return [2 /*return*/, (true)];
                        }
                        return [4 /*yield*/, Departments_2.Departments.getTitle(code)];
                    case 1:
                        title = _a.sent();
                        if (this.hasField(field))
                            this.setValue(field, title);
                        if (event.type == forms42core_1.EventType.WhenValidateField && !this.queryMode()) {
                            if (title == null) {
                                this.form.warning("Invalid Department Id", "Employees");
                                return [2 /*return*/, (false)];
                            }
                        }
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    Employees.prototype.setPrimaryKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = this.getRecord().response;
                this.setValue("employee_id", response.getValue("employee_id"));
                return [2 /*return*/, (true)];
            });
        });
    };
    Employees.prototype.setJobLov = function (fields) {
        this.setListOfValues(Jobs_1.Jobs.getJobLov(), fields);
    };
    Employees.prototype.setDepartmentLov = function (fields) {
        this.setListOfValues(Departments_1.Departments.getDepartmentLov(), fields);
    };
    Employees.getManagerLov = function () {
        var source = null;
        var bindvalues = [];
        var filter = null;
        var fnameflt = forms42core_1.Filters.ILike("first_name");
        var lnameflt = forms42core_1.Filters.ILike("last_name");
        filter = new forms42core_1.FilterStructure().and(fnameflt).or(lnameflt);
        source = new Employees_1.Employees().addFilter(filter);
        bindvalues.push(fnameflt.getBindValue());
        bindvalues.push(lnameflt.getBindValue());
        var lov = {
            title: "Employees",
            filterPostfix: "%",
            datasource: source,
            inReadOnlyMode: true,
            bindvalue: bindvalues,
            displayfields: ["first_name", "last_name"],
            sourcefields: "employee_id",
            targetfields: "manager_id"
        };
        return (lov);
    };
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.OnNewRecord })
    ], Employees.prototype, "setDefaults");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.OnFetch })
    ], Employees.prototype, "getDerivedFields");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.WhenValidateField, field: "salary" })
    ], Employees.prototype, "validateSalary");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.WhenValidateField, field: "job_id" })
    ], Employees.prototype, "validateJob");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.WhenValidateField, field: "department_id" })
    ], Employees.prototype, "validateDepartment");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.PostInsert })
    ], Employees.prototype, "setPrimaryKey");
    return Employees;
}(forms42core_1.Block));
exports.Employees = Employees;
