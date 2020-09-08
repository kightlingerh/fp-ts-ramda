"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xprod = void 0;
const Array_1 = require("fp-ts/lib/Array");
function _xprod(as, bs) {
    return Array_1.array.chain(as, a => bs.map(b => [a, b]));
}
function xprod(as, bs) {
    if (bs === undefined) {
        return (bs) => _xprod(as, bs);
    }
    else {
        return _xprod(as, bs);
    }
}
exports.xprod = xprod;
