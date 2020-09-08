"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyPass = void 0;
const pipeable_1 = require("fp-ts/lib/pipeable");
const monoidAnyFoldMap_1 = require("./shared/monoidAnyFoldMap");
function _anyPass(predicates, val) {
    return pipeable_1.pipe(predicates, monoidAnyFoldMap_1.monoidAnyFoldMap(predicate => predicate(val)));
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
