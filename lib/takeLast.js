"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeLast = void 0;
const Array_1 = require("fp-ts/lib/Array");
function takeLast(i, as) {
    const f = Array_1.takeRight(i);
    if (as === undefined) {
        return f;
    }
    else {
        return f(as);
    }
}
exports.takeLast = takeLast;
