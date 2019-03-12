//import { linkExtract, pathToAbsolute, pathFiles } from './lib/path-controller';
const validatePath = require('./src/path-controller');
const validateLink = require('./src/services/fnValidate');

const fs = require('fs');
const path = require('path');

const mdLinks = (route, options) => {
  const currentPath = fs.statSync(route);
  return new Promise((resolve, reject) => {
    {!path.isAbsolute(route) ? validatePath.pathToAbsolute(route) : currentPath;}
    const routesArr = validatePath.pathFiles(route);
    // aqui tengo la ruta de archivos md 
    if (!options) {
      // aquí extraigo los links de los archivos md para retornar un array de objetos con su href, route y text
      validatePath.linkExtract(routesArr) // 1
        .then(response => resolve(response))
        .catch(error => reject(error));
    } else if (options.validate) {
      validatePath.linkExtract(routesArr) // 1
        .then((link) => validateLink.linkValidate(link))
        .then(response => resolve(response))
        .catch(error => reject(error));
    } 
  });
};

module.exports = mdLinks;