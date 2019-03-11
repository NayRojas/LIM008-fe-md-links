//import { linkExtract, pathToAbsolute, pathFiles } from './lib/path-controller';
const validatePath = require('./src/path-controller');
const validateLink = require('./src/services/fnValidate');
const statsLink = require('./src/services/fnStats');
const statsBroken = require('./src/services/fnValidateStats');

const fs = require('fs');
const path = require('path');

const mdLinks = (route, options) => {
  const currentPath = fs.statSync(route);
  return new Promise((resolve, reject) => {
    {!path.isAbsolute(route) ? validatePath.pathToAbsolute(route) : currentPath; }
    const routesArr = validatePath.pathFiles(route);
    // aqui tengo la ruta de archivos md 
    if (!options) {
      // aquí extraigo los links de los archivos md para retornar un array de objetos con su href, route y text
      validatePath.linkExtract(routesArr)
        .then(response => resolve(response))
        .catch(error => reject(error));
    } else if (options.validate && !options.stats) {
      validatePath.linkExtract(routesArr)
        .then((link) => validateLink.linkValidate(link))
        .then(response => resolve(response))
        .catch(error => reject(error));
    } else if (options.stats && !options.validate) {
      validatePath.linkExtract(routesArr)
        .then((link) => statsLink.fnStats(link))
        .then(response => resolve(response))
        .catch(error => reject(error));
    } else if (options.stats  && options.validate ) {
      let finalObject = []
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(validatePath.linkExtract(routesArr)),500);
      }).then((result) => {
        //obtengo links de forma asincrona
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(statsLink.fnStats(result)));
          console.log
        });
      }).then((stat) => {
        //Obtengo stats de forma asincrona
        resolve(stat)
      })
    }
      
      
      
    //let stats = statsLink.linkValidate(links);
    //let broke = statsBroken.fnValidateStats(stats);
    // Promise.all([links, stats, broke])
    // .then(response => resolve(response));
      
    // .then((routesArr) => statsLink.fnStats(routesArr)) 
  });
};

module.exports = mdLinks;
