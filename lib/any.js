"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
const monoidAnyFoldMap_1 = require("./shared/monoidAnyFoldMap");
function _any(predicate, as) {
    return monoidAnyFoldMap_1.monoidAnyFoldMap(predicate)(as);
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
