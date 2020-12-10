"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofActionPayload = void 0;
var operators_1 = require("rxjs/operators");
var ofAction_1 = require("./ofAction");
function ofActionPayload() {
    var actionCreators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actionCreators[_i] = arguments[_i];
    }
    return function (actions$) {
        return actions$.pipe(ofAction_1.ofAction.apply(void 0, actionCreators), operators_1.map(function (action) { return action.payload; }));
    };
}
exports.ofActionPayload = ofActionPayload;
