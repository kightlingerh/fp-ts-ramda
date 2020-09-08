"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
function equals(E) {
    return (x, y) => {
        if (y === undefined) {
            return y => E.equals(x, y);
        }
        else {
            return E.equals(x, y);
        }
    };
}
exports.equals = equals;
