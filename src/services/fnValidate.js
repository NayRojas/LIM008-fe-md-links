"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkValidate = void 0;

var fetch = require('node-fetch');

var linkValidate = function linkValidate(arrayLinks) {
  var mapCb = function mapCb(link) {
    return new Promise(function (resolve, reject) {
      fetch(link.href).then(function (res) {
        if (res.status >= 200 && res.status < 400) {
          link.code = res.status;
          link.status = res.statusText;
          resolve(link);
        } else if (res.status >= 400 && res.status < 500) {
          link.code = res.status;
          link.status = 'FAIL';
          resolve(link);
        } else if (res.status >= 500 && res.status < 600) {
          link.code = res.status;
          link.status = 'FAIL';
          resolve(link);
        }
      }).catch(function (error) {
        error = 'URL must be checked';
        link.code = error;
        link.status = 'FAIL';
        resolve(link);
      });
    });
  };

  var result = arrayLinks.map(mapCb);
  return Promise.all(result);
};

exports.linkValidate = linkValidate;