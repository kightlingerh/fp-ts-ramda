"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPass = void 0;
function _allPass(predicates, val) {
    return predicates.every(p => p(val));
}
function allPass(predicates, val) {
    if (val === undefined) {
        return val => _allPass(predicates, val);
    }
    else {
        return _allPass(predicates, val);
    }
}
exports.allPass = allPass;
