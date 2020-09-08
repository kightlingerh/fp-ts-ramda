"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
const Ord_1 = require("fp-ts/lib/Ord");
function clamp(O) {
    const c = Ord_1.clamp(O);
    return (low, ...args) => {
        if (args.length === 0) {
            return (hi, ...args) => {
                if (args.length === 0) {
                    return (x) => {
                        return c(low, hi)(x);
                    };
                }
                return c(low, hi)(args[0]);
            };
        }
        if (args.length === 1) {
            return (x) => {
                return c(low, args[1])(x);
            };
        }
        return c(low, args[0])(args[1]);
    };
}
exports.clamp = clamp;
