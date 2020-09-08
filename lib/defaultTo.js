"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTo = void 0;
const Option_1 = require("fp-ts/lib/Option");
const pipeable_1 = require("fp-ts/lib/pipeable");
function _defaultTo(d, value) {
    return pipeable_1.pipe(Option_1.fromNullable(value), Option_1.getOrElse(() => d));
}
function defaultTo(d, value) {
    switch (arguments.length) {
        case 1:
            return (value) => {
                return _defaultTo(d, value);
            };
        case 2:
            return _defaultTo(d, value);
    }
}
exports.defaultTo = defaultTo;
