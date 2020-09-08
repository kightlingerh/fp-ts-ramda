"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjust = void 0;
const Array_1 = require("fp-ts/lib/Array");
const Option_1 = require("fp-ts/lib/Option");
const pipeable_1 = require("fp-ts/lib/pipeable");
function _adjust(i, f, as) {
    return pipeable_1.pipe(Array_1.modifyAt(i >= 0 ? i : as.length + i, f)(as), Option_1.getOrElse(() => as));
}
function adjust(i, f, as) {
    if (f === undefined) {
        return (f, as) => {
            if (as === undefined) {
                return (as) => _adjust(i, f, as);
            }
            else {
                return _adjust(i, f, as);
            }
        };
    }
    else if (as === undefined) {
        return (as) => _adjust(i, f, as);
    }
    else {
        return _adjust(i, f, as);
    }
}
exports.adjust = adjust;
