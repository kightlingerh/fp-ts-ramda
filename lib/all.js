"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const monoidAllFoldMap_1 = require("./shared/monoidAllFoldMap");
function _all(predicate, as) {
    return monoidAllFoldMap_1.monoidAllFoldMap(predicate)(as);
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
