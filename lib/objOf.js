"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objOf = void 0;
const Record_1 = require("fp-ts/lib/Record");
function objOf(k, a) {
    switch (arguments.length) {
        case 1:
            return (a) => Record_1.singleton(k, a);
        case 2:
            return Record_1.singleton(k, a);
    }
}
exports.objOf = objOf;
