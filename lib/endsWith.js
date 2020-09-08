"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsWith = void 0;
const Array_1 = require("fp-ts/lib/Array");
const takeLast_1 = require("./takeLast");
function _endsWith(E) {
    const eqArray = Array_1.getEq(E);
    return (suffix, as) => eqArray.equals(suffix, takeLast_1.takeLast(suffix.length, as));
}
function endsWith(E) {
    const endsWithE = _endsWith(E);
    return (suffix, oas) => {
        if (oas === undefined) {
            return (as) => endsWithE(suffix, as);
        }
        else {
            return endsWithE(suffix, oas);
        }
    };
}
exports.endsWith = endsWith;
