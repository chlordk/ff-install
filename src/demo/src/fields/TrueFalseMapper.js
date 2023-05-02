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
exports.__esModule = true;
exports.TrueFalseMapper = void 0;
//Demo: Convert backend boolean to Y/N flag
var forms42core_1 = require("forms42core");
var TrueFalseMapper = /** @class */ (function () {
    function TrueFalseMapper() {
        this.value = { frontend: null, backend: null };
    }
    TrueFalseMapper.prototype.getValue = function (tier) {
        if (tier == forms42core_1.Tier.Backend)
            return (this.value.backend);
        else
            return (this.value.frontend);
    };
    TrueFalseMapper.prototype.setValue = function (tier, value) {
        if (tier == forms42core_1.Tier.Frontend) {
            this.value.frontend = value;
            this.value.backend = TrueFalseMapper.front2back.get(value);
        }
        else {
            this.value.backend = value;
            this.value.frontend = TrueFalseMapper.back2front.get(value);
        }
    };
    TrueFalseMapper.prototype.getIntermediateValue = function (tier) {
        if (tier == forms42core_1.Tier.Backend)
            return (this.value.backend);
        else
            return (this.value.frontend);
    };
    TrueFalseMapper.prototype.setIntermediateValue = function (tier, value) {
        if (tier == forms42core_1.Tier.Backend) {
            this.value.backend = value;
            this.value.frontend = TrueFalseMapper.back2front.get(value);
        }
        else {
            this.value.frontend = value;
            this.value.backend = TrueFalseMapper.front2back.get(value);
        }
    };
    TrueFalseMapper.prototype.toString = function () {
        return ("value: [" + this.value.frontend + "," + this.value.backend + "]");
    };
    TrueFalseMapper.back2front = new Map([
        ["true", "Y"],
        ["false", "N"]
    ]);
    TrueFalseMapper.front2back = new Map([
        ["Y", "true"],
        ["N", "false"]
    ]);
    return TrueFalseMapper;
}());
exports.TrueFalseMapper = TrueFalseMapper;
