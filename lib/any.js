"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
function _any(predicate, as) {
    return as.some(predicate);
}
function any(predicate, as) {
    if (as === undefined) {
        return as => _any(predicate, as);
    }
    else {
        return _any(predicate, as);
    }
}
exports.any = any;
