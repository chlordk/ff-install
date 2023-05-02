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
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(block, column) {
        this.block = block;
        this.asc$ = true;
        this.column$ = null;
        this.column$ = column;
    }
    Object.defineProperty(Sorter.prototype, "column", {
        set: function (column) {
            if (column == this.column$)
                this.asc$ = !this.asc$;
            else {
                this.column$ = column;
                this.asc$ = true;
            }
            if (!this.block.empty()) {
                this.block.datasource.sorting = this.order;
                this.block.reQuery();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sorter.prototype, "order", {
        get: function () {
            var sort = this.column$;
            sort += (this.asc$) ? "" : " desc";
            return (sort);
        },
        enumerable: false,
        configurable: true
    });
    return Sorter;
}());
exports.Sorter = Sorter;
