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
exports.__esModule = true;
exports.Departments = void 0;
var Departments_html_1 = require("./Departments.html");
var BaseForm_1 = require("../../BaseForm");
var Sorter_1 = require("../../utils/Sorter");
var Departments_1 = require("../../blocks/Departments");
var Departments = /** @class */ (function (_super) {
    __extends(Departments, _super);
    function Departments() {
        var _this = _super.call(this, Departments_html_1["default"]) || this;
        _this.sorter = null;
        _this.dept = new Departments_1.Departments(_this, "Departments");
        _this.title = "Departments";
        _this.dept.setManagerLov("manager");
        _this.dept.setLocationLov("location");
        _this.sorter = new Sorter_1.Sorter(_this.dept, "department_id");
        return _this;
    }
    Departments.prototype.sort = function (field) {
        this.sorter.column = field;
    };
    return Departments;
}(BaseForm_1.BaseForm));
exports.Departments = Departments;