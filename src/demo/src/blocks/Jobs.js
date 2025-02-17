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
exports.Jobs = void 0;
var Jobs_1 = require("../datasources/database/Jobs");
var forms42core_1 = require("forms42core");
var Jobs = /** @class */ (function (_super) {
    __extends(Jobs, _super);
    function Jobs(form, name) {
        var _this = _super.call(this, form, name) || this;
        _this.datasource = new Jobs_1.Jobs();
        return _this;
    }
    Jobs.getJobLov = function () {
        var source = null;
        var bindvalues = [];
        var filter = null;
        var idflt = forms42core_1.Filters.ILike("job_id");
        var titleflt = forms42core_1.Filters.ILike("job_title");
        filter = new forms42core_1.FilterStructure().and(idflt).or(titleflt);
        source = new Jobs_1.Jobs().addFilter(filter);
        bindvalues.push(idflt.getBindValue());
        bindvalues.push(titleflt.getBindValue());
        var lov = {
            title: "Jobs",
            inQueryMode: true,
            filterPostfix: "%",
            datasource: source,
            bindvalue: bindvalues,
            displayfields: "job_title",
            filterInitialValueFrom: "job_id",
            sourcefields: ["job_id", "job_title"],
            targetfields: ["job_id", "job_title"]
        };
        return (lov);
    };
    return Jobs;
}(forms42core_1.Block));
exports.Jobs = Jobs;
