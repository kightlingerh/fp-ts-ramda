"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = void 0;
const Semigroup_1 = require("fp-ts/lib/Semigroup");
const concat = Semigroup_1.semigroupAll.concat;
function and(a, b) {
    if (b === undefined) {
        return (b) => concat(a, b);
    }
    else {
        return concat(a, b);
    }
}
exports.and = and;
