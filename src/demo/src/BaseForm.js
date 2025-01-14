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
exports.BaseForm = void 0;
var FormsModule_1 = require("./FormsModule");
var forms42core_1 = require("forms42core");
var BaseForm = /** @class */ (function (_super) {
    __extends(BaseForm, _super);
    function BaseForm(content) {
        var _this = _super.call(this, content) || this;
        _this.id = null;
        _this.view = null;
        _this.title = null;
        _this.moveable = true;
        _this.resizable = true;
        _this.id = "f" + ++BaseForm.forms;
        _this.addEventListener(_this.oninit, { type: forms42core_1.EventType.PostViewInit });
        return _this;
    }
    BaseForm.prototype.oninit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var px, off, posX, posY;
            return __generator(this, function (_a) {
                px = 16;
                off = BaseForm.forms % 8;
                posX = off * px;
                posY = off * px + 20;
                this.getView().style.top = posY + "px";
                this.getView().style.left = posX + "px";
                this.setTitle(this.title);
                return [2 /*return*/, (true)];
            });
        });
    };
    BaseForm.prototype.toggle = function () {
        if (this.view == null) {
            this.view = this.getViewPort();
            var avail = this.getParentViewPort();
            avail.x = 0;
            avail.y = 0;
            avail.width = +avail.width - 2;
            avail.height = +avail.height - 2;
            this.setViewPort(avail);
        }
        else {
            this.setViewPort(this.view);
            this.view = null;
        }
    };
    BaseForm.prototype.minimize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var forms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validate()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        forms = FormsModule_1.FormsModule.get();
                        forms.list.add(this);
                        this.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseForm.prototype.setTitle = function (title) {
        var header = this.getView().querySelector("[name='title']");
        header === null || header === void 0 ? void 0 : header.appendChild(document.createTextNode(title));
    };
    BaseForm.forms = 0;
    return BaseForm;
}(forms42core_1.Form));
exports.BaseForm = BaseForm;
