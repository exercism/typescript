"use strict";
exports.__esModule = true;
var Acronym = /** @class */ (function () {
    function Acronym() {
    }
    Acronym.parse = function (phrase) {
        if (typeof phrase !== 'undefined' && phrase !== undefined) {
            var match = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g);
            return !match ? '' : match.reduce(function (acronym, word) { return acronym += word[0].toUpperCase(); }, '');
        }
        return '';
    };
    return Acronym;
}());
exports["default"] = Acronym;
