"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = void 0;
const Array_1 = require("fp-ts/lib/Array");
function append(a, as) {
    if (as === undefined) {
        return (as) => Array_1.snoc(as, a);
    }
    else {
        return Array_1.snoc(as, a);
    }
}
exports.append = append;
