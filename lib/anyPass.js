"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyPass = void 0;
function _anyPass(predicates, val) {
    return predicates.some(p => p(val));
}
function anyPass(predicates, val) {
    if (val === undefined) {
        return val => _anyPass(predicates, val);
    }
    else {
        return _anyPass(predicates, val);
    }
}
exports.anyPass = anyPass;
