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
exports.Menu = void 0;
var Commands_1 = require("./Commands");
var FormsModule_1 = require("../../FormsModule");
var forms42core_1 = require("forms42core");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super.call(this, new Commands_1.Commands()) || this;
        _this.menuelem = null;
        _this.options.skiproot = true;
        _this.menuelem = document.getElementById("topbar");
        _this.target = _this.menuelem;
        _this.show();
        return _this;
    }
    Menu.prototype.onConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entry = null;
                        return [4 /*yield*/, this.findEntry("/topbar/connection/connect")];
                    case 1:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/connection/disconnect")];
                    case 2:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        if (!(FormsModule_1.FormsModule.get().getRunningForms().length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.findEntry("/topbar/query")];
                    case 3:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        return [4 /*yield*/, this.findEntry("/topbar/record")];
                    case 4:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        _a.label = 5;
                    case 5:
                        this.show();
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    Menu.prototype.onDisConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entry = null;
                        return [4 /*yield*/, this.findEntry("/topbar/connection/disconnect")];
                    case 1:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/connection/connect")];
                    case 2:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        return [4 /*yield*/, this.findEntry("/topbar/query")];
                    case 3:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/record")];
                    case 4:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/transaction")];
                    case 5:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        this.show();
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    Menu.prototype.onFormOpen = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entry = null;
                        if (!(event.form.constructor.name == "UsernamePassword")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.findEntry("/topbar/query")];
                    case 1:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/record")];
                    case 2:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/transaction")];
                    case 3:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/connection")];
                    case 4:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        this.show();
                        return [2 /*return*/, (true)];
                    case 5:
                        if (!(FormsModule_1.FormsModule.get().getRunningForms().length == 1)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.findEntry("/topbar/form")];
                    case 6:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        if (!FormsModule_1.FormsModule.DATABASE.connected()) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.findEntry("/topbar/query")];
                    case 7:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        return [4 /*yield*/, this.findEntry("/topbar/record")];
                    case 8:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        _a.label = 9;
                    case 9:
                        this.show();
                        _a.label = 10;
                    case 10: return [2 /*return*/, (true)];
                }
            });
        });
    };
    Menu.prototype.onFormClose = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entry = null;
                        if (!(event.form.constructor.name == "UsernamePassword")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findEntry("/topbar/connection")];
                    case 1:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = false;
                        _a.label = 2;
                    case 2:
                        if (!(FormsModule_1.FormsModule.get().getRunningForms().length == 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.findEntry("/topbar/form")];
                    case 3:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/query")];
                    case 4:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        return [4 /*yield*/, this.findEntry("/topbar/record")];
                    case 5:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        _a.label = 6;
                    case 6:
                        this.show();
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    Menu.prototype.onTransactionStart = function (event) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        entry = null;
                        if ((_b = (_a = event.form) === null || _a === void 0 ? void 0 : _a.getBlock(event.block)) === null || _b === void 0 ? void 0 : _b.isControlBlock())
                            return [2 /*return*/, (true)];
                        return [4 /*yield*/, this.findEntry("/topbar/transaction")];
                    case 1:
                        entry = _c.sent();
                        if (entry)
                            entry.disabled = false;
                        this.show();
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    Menu.prototype.onTransactionEnd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entry = null;
                        return [4 /*yield*/, this.findEntry("/topbar/transaction")];
                    case 1:
                        entry = _a.sent();
                        if (entry)
                            entry.disabled = true;
                        this.show();
                        return [2 /*return*/, (true)];
                }
            });
        });
    };
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.Connect })
    ], Menu.prototype, "onConnect");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.Disconnect })
    ], Menu.prototype, "onDisConnect");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.onNewForm })
    ], Menu.prototype, "onFormOpen");
    __decorate([
        (0, forms42core_1.formevent)({ type: forms42core_1.EventType.PostCloseForm })
    ], Menu.prototype, "onFormClose");
    __decorate([
        (0, forms42core_1.formevent)([
            { type: forms42core_1.EventType.OnNewRecord },
            { type: forms42core_1.EventType.OnTransaction }
        ])
    ], Menu.prototype, "onTransactionStart");
    __decorate([
        (0, forms42core_1.formevent)([{ type: forms42core_1.EventType.PostCommit }, { type: forms42core_1.EventType.PostRollback }])
    ], Menu.prototype, "onTransactionEnd");
    return Menu;
}(forms42core_1.MenuComponent));
exports.Menu = Menu;
