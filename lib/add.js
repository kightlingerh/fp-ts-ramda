"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const Field_1 = require("fp-ts/lib/Field");
function add(x, y) {
    if (y === undefined) {
        return y => Field_1.fieldNumber.add(x, y);
    }
    else {
        return Field_1.fieldNumber.add(x, y);
    }
}
exports.add = add;
