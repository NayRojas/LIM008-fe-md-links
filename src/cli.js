#!/usr/bin/env node
"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mdLinks = require('./md-links.js');

var statsLink = require('../src/services/fnStats');

var options = {
  validate: false,
  stats: false
};

var _process$argv = _toArray(process.argv),
    params = _process$argv.slice(2);

var _params = _toArray(params),
    ruta = _params[0],
    opts = _params.slice(1);

opts.forEach(function (option) {
  if ((option === '-v' || option === '--validate') && (option === '-s' || option === '--stats')) {
    options.validate = true;
    options.stats = true;
  }

  if (option === '-v' || option === '--validate') {
    options.validate = true;
  }

  if (option === '-s' || option === '--stats') {
    options.stats = true;
  }
});

if (!options.validate && !options.stats) {
  mdLinks(ruta).then(function (response) {
    response.forEach(function (element) {
      console.log("".concat(element.route, " ").concat(element.href, " ").concat(element.text.substring(0, 50), "\n"));
    });
  }).catch(console.error);
}

if (options.validate && !options.stats) {
  mdLinks(ruta, options).then(function (response) {
    response.forEach(function (element) {
      console.log("".concat(element.route, " ").concat(element.href, " ").concat(element.text.substring(0, 50), " ").concat(element.code, " ").concat(element.status, "\n"));
    });
  }).catch(console.error);
}

if (options.stats && !options.validate) {
  mdLinks(ruta).then(function (response1) {
    return statsLink.fnStats(response1);
  }).then(function (stats) {
    console.log("Total: ".concat(stats.total, " \nUnique: ").concat(stats.unique, "\n "));
  }).catch(console.error);
}

;

if (options.stats && options.validate) {
  mdLinks(ruta, {
    validate: true
  }).then(function (response1) {
    return statsLink.fnStats(response1);
  }).then(function (stats1) {
    console.log("Total: ".concat(stats1.total, " \nUnique: ").concat(stats1.unique, " \nBroken: ").concat(stats1.broken, "\n"));
  }).catch(console.error);
}