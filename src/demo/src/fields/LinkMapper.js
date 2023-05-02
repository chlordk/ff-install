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
exports.LinkMapper = void 0;
var forms42core_1 = require("forms42core");
var LinkMapper = /** @class */ (function () {
    function LinkMapper() {
        this.value = null;
        this.ivalue = null;
        this.link = this.createLink();
    }
    LinkMapper.prototype.getValue = function (tier) {
        if (tier == forms42core_1.Tier.Frontend)
            return (this.link);
        else
            return (this.value);
    };
    LinkMapper.prototype.setValue = function (tier, value) {
        if (tier == forms42core_1.Tier.Backend) {
            this.value = value;
            if (value == null)
                value = "";
            var text = this.link.firstChild;
            this.link.title = value;
            text.textContent = value;
            this.link.href = "https://" + value;
        }
    };
    LinkMapper.prototype.getIntermediateValue = function (tier) {
        if (tier == forms42core_1.Tier.Frontend)
            return (this.ivalue);
        else
            return (this.value + "");
    };
    LinkMapper.prototype.setIntermediateValue = function (tier, value) {
        this.ivalue = value;
        this.setValue(tier, value);
    };
    LinkMapper.prototype.createLink = function () {
        var link = document.createElement("a");
        link.append(document.createTextNode(""));
        link.target = "_blank";
        return (link);
    };
    return LinkMapper;
}());
exports.LinkMapper = LinkMapper;
