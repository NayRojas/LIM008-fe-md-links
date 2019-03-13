"use strict";

var validatePath = require('./path-controller');

var validateLink = require('./services/fnValidate');

var fs = require('fs');

var path = require('path');

var mdLinks = function mdLinks(route, options) {
  return new Promise(function (resolve, reject) {
    var currentPath = fs.statSync(route);
    {
      !path.isAbsolute(route) ? validatePath.pathToAbsolute(route) : currentPath;
    }
    var routesArr = validatePath.pathFiles(route);

    if (!options) {
      validatePath.linkExtract(routesArr).then(function (response) {
        return resolve(response);
      });
    } else if (options.validate) {
      validatePath.linkExtract(routesArr).then(function (link) {
        return validateLink.linkValidate(link);
      }).then(function (response) {
        return resolve(response);
      });
    }
  });
};

module.exports = mdLinks;