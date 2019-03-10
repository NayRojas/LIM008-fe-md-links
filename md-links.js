import { linkExtract, pathToAbsolute, pathFiles } from './lib/path-controller.js';
import { linkValidate } from './lib/services/fnValidate.js';
import { fnValidateStats } from './lib/services/fnValidateStats.js';
import { fnStats } from './lib/services/fnStats.js';

const path = require('path');

export const mdLinks = (route, options) => {
  {!path.isAbsolute(route) ? pathToAbsolute(route) : route; }
  const routesArr = pathFiles(route);
  console.log(routesArr);
  return new Promise((resolve) => {
    if (route) {
      const links = linkExtract(routesArr);
      console.log(links);
    } else if (options.validate) {
      linkExtract(routesArr)
        .then((obj) => linkValidate(obj))
        .then(response => resolve(response))
        .catch(console.log(error));
    } else if (options.stats) {
      linkExtract(routesArr)
        .then((routesArr) => fnStats(routesArr))
        .then(response => resolve(response))
        .catch(console.log(error));
    } else if (options.validate && options.stats) {
      linkExtract(routesArr)
        .then((routesArr) => fnStats(routesArr))
        .then((routesArr) => fnValidateStats(routesArr))
        .then(response => resolve(response))
        .catch(console.log(error));
    }
  });
};