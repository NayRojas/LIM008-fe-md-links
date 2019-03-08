"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fnStats = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * 
 * @param {es un array de objetos proveniente de la funcion validate links } linkArray 
 * @return { un objeto en el que sus propiedades son number} 
 */
// este es un array de objetos
var fnStats = function fnStats(linksArrayObj) {
  return new Promise(function (resolve) {
    // este es el objeto de los total y uniques
    var stats = {}; // este es el array de objetos de los href´s 

    var arrHref = [];
    linksArrayObj.map(function (objLinkFromArray) {
      arrHref.push(objLinkFromArray.href);
    });
    stats.total = arrHref.length;
    stats.unique = _toConsumableArray(new Set([arrHref])).length;
    resolve(stats);
  });
};

exports.fnStats = fnStats;