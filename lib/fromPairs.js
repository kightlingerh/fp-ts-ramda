"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPairs = void 0;
const Array_1 = require("fp-ts/lib/Array");
const Record_1 = require("fp-ts/lib/Record");
const Semigroup_1 = require("fp-ts/lib/Semigroup");
/**
 * Same as [R.fromPairs](https://ramdajs.com/docs/#fromPairs)
 *
 * @since 0.1.1
 */
exports.fromPairs = Record_1.fromFoldable(Semigroup_1.getLastSemigroup(), Array_1.array);
