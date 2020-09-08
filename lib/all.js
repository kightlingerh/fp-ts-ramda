"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
function _all(predicate, as) {
    return as.every(predicate);
}
function all(predicate, as) {
    if (as === undefined) {
        return as => _all(predicate, as);
    }
    else {
        return _all(predicate, as);
    }
}
exports.all = all;
