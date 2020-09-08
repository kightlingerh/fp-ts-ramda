"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPass = void 0;
const pipeable_1 = require("fp-ts/lib/pipeable");
const monoidAllFoldMap_1 = require("./shared/monoidAllFoldMap");
function _allPass(predicates, val) {
    return pipeable_1.pipe(predicates, monoidAllFoldMap_1.monoidAllFoldMap(predicate => predicate(val)));
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
