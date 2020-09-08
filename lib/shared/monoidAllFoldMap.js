"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monoidAllFoldMap = void 0;
const Array_1 = require("fp-ts/lib/Array");
const Monoid_1 = require("fp-ts/lib/Monoid");
exports.monoidAllFoldMap = Array_1.foldMap(Monoid_1.monoidAll);
