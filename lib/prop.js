"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
function _prop(k, obj) {
    return obj[k];
}
function prop(k, obj) {
    if (obj === undefined) {
        return (obj) => _prop(k, obj);
    }
    else {
        return _prop(k, obj);
    }
}
exports.prop = prop;
