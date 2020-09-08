"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.always = void 0;
const function_1 = require("fp-ts/lib/function");
/**
 * Same as [R.always](https://ramdajs.com/docs/#always)
 *
 * @since 0.1.1
 */
exports.always = function_1.constant;
