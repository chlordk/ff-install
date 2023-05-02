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
exports.PageFooterStyle = exports.Minimized = void 0;
var Minimized = /** @class */ (function () {
    function Minimized() {
        this.list = null;
        // private icon:HTMLImageElement = null;
        this.span = null;
        this.forms = new Map();
        this.list = document.getElementById("form-list");
        this.span = this.list.querySelector("#entry");
        this.span.remove();
    }
    Minimized.prototype.add = function (form) {
        var _a;
        var span = this.span.cloneNode(true);
        var icon = span.children.item(0);
        var label = (_a = span.children) === null || _a === void 0 ? void 0 : _a.item(1);
        span.id = form.id;
        icon.id = form.id;
        label.textContent = form.title;
        icon.textContent = form.title.substring(0, 3);
        icon.style.cssText = PageFooterStyle.IconStyle;
        span.style.cssText = PageFooterStyle.TooltipsStyle;
        this.list.style.cssText = PageFooterStyle.ListStyle;
        label.style.cssText = PageFooterStyle.TooltipstextStyle;
        span.addEventListener("click", this);
        span.addEventListener("mouseover", this);
        this.list.appendChild(span);
        this.forms.set(form.id, form);
    };
    Minimized.prototype.handleEvent = function (event) {
        var _a, _b, _c;
        var entry = event.target;
        var label = (_a = entry.children) === null || _a === void 0 ? void 0 : _a.item(1);
        if (label == null) {
            label = (_c = (_b = entry.parentElement) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.item(1);
            if (label == null)
                return;
        }
        if (event.type == "click") {
            var form = this.forms.get(entry.id);
            form.show();
            entry.remove();
            this.forms["delete"](entry.id);
        }
        if (event.type == "mouseover") {
            var labelrect = label.getBoundingClientRect();
            var listrect = this.list.getBoundingClientRect();
            if (labelrect.x < listrect.x)
                label.style.left = (listrect.x + labelrect.width / 2) + "px";
        }
    };
    return Minimized;
}());
exports.Minimized = Minimized;
var PageFooterStyle = /** @class */ (function () {
    function PageFooterStyle() {
    }
    PageFooterStyle.IconStyle = "\n        height:32px;\n        display: flex;\n        cursor: default;\n        margin-top: 3px;\n        font-weight: bold;\n        background: white;\n        margin-left: 1.5px;\n        margin-right: 1.5px;\n        align-items:  center;\n        border: solid 1px black;\n        justify-content: center;\n    ";
    PageFooterStyle.TooltipstextStyle = "\n        left:45%;\n        z-index: 1;\n        bottom:100%;\n        color: #fff;\n        display:flex;\n        padding: 5px;\n        font-size: 15px;\n        text-align: center;\n        position: absolute;\n        visibility: hidden;\n        border-radius: 4px;\n        background-color: black;\n        transform: translateX(-50%);\n    ";
    PageFooterStyle.TooltipsStyle = "\n        position: relative;\n    ";
    PageFooterStyle.ListStyle = "\n        display:flex;\n    ";
    return PageFooterStyle;
}());
exports.PageFooterStyle = PageFooterStyle;
