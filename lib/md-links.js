const validatePath = require('./path-controller');
const validateLink = require('./services/fnValidate');

const fs = require('fs');
const path = require('path');

const mdLinks = (route, options) => {
  return new Promise((resolve, reject) => {
    const currentPath = fs.statSync(route);
    {!path.isAbsolute(route) ? validatePath.pathToAbsolute(route) : currentPath;}
    const routesArr = validatePath.pathFiles(route);
    if (!options) {
      validatePath.linkExtract(routesArr) 
        .then(response => resolve(response))
    } else if (options.validate) {
      validatePath.linkExtract(routesArr) 
        .then((link) => validateLink.linkValidate(link))
        .then(response => resolve(response))
    }
  });
};

module.exports = mdLinks;