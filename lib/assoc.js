"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
const Record_1 = require("fp-ts/lib/Record");
function _assoc(k, v, obj) {
    return Record_1.insertAt(k, v)(obj);
}
function assoc(k, v, obj) {
    if (v === undefined) {
        return (v, obj) => {
            if (obj === undefined) {
                return (obj) => _assoc(k, v, obj);
            }
            else {
                return _assoc(k, v, obj);
            }
        };
    }
    else if (obj === undefined) {
        return (obj) => _assoc(k, v, obj);
    }
    else {
        return _assoc(k, v, obj);
    }
}
exports.assoc = assoc;
