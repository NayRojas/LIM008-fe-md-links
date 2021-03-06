"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkExtract = exports.pathFiles = exports.pathToAbsolute = void 0;

var fs = require('fs');

var path = require('path');

var pathToAbsolute = function pathToAbsolute(route) {
  if (!path.isAbsolute(route)) return path.resolve(route);
};

exports.pathToAbsolute = pathToAbsolute;

var pathFiles = function pathFiles(route) {
  var pathArray = [];

  if (fs.lstatSync(route).isFile()) {
    if (path.extname(route) === '.md') {
      pathArray.push(route);
    }
  } else {
    fs.readdirSync(route).forEach(function (file) {
      pathArray = pathArray.concat(pathFiles(path.join(route, file)));
    });
  }

  return pathArray;
};

exports.pathFiles = pathFiles;

var linkExtract = function linkExtract(arrRoutes) {
  var objLinks = [];
  return new Promise(function (resolve, reject) {
    arrRoutes.forEach(function (mdRoute) {
      var fileContentArr = fs.readFileSync(mdRoute, 'utf-8');
      var regExLinks = /\[((.+?))\]\(().+?\)/g;
      var regExHref = /\((http|https).+?\)/g;
      var regExText = /\[.+?\]/g;
      var linksArr = fileContentArr.match(regExLinks);

      if (linksArr) {
        linksArr.forEach(function (link) {
          var txtHref = link.match(regExHref).toString();
          var txtText = link.match(regExText).toString();
          objLinks.push({
            route: mdRoute,
            href: txtHref.substring(1, txtHref.length - 1),
            text: txtText.substring(1, txtText.length - 1)
          });
        });
      }
    });
    resolve(objLinks);

    if (!arrRoutes) {
      reject({
        error: 'Type a valid route'
      });
    }
  });
};

exports.linkExtract = linkExtract;