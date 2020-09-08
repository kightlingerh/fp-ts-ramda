"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPairs = void 0;
const Array_1 = require("fp-ts/lib/Array");
const Record_1 = require("fp-ts/lib/Record");
/**
 * Same as [R.toPairs](https://ramdajs.com/docs/#toPairs)
 *
 * @since 0.1.1
 */
exports.toPairs = Record_1.toUnfoldable(Array_1.array);
