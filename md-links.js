import { linkExtract, pathToAbsolute, pathFiles } from './lib/path-controller.js';
import { linkValidate } from './lib/services/fnValidate.js';
import { fnValidateStats } from './lib/services/fnValidateStats.js';
import { fnStats } from './lib/services/fnStats.js';
const path = require('path');

export const mdLinks = (route, options) => {
  const routes = path.isAbsolute(route);
  const absoluteRoute = pathFiles(pathToAbsolute(routes));
  return new Promise((resolve, reject) => {
    if (!options.stats && !options.validate) {
      linkExtract(absoluteRoute)
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate) {
      linkExtract(absoluteRoute)
        .then((link) => linkValidate(link))
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.stats) {
      linkExtract(absoluteRoute)
        .then((link) => fnStats(link))
        .then(response => resolve(response))
        .catch(console.error);
    } else if (options.validate && options.stats) {
      linkExtract(absoluteRoute)
        .then((link) => fnStats(link))
        .then((link) => fnValidateStats(link))
        .then(response => resolve(response))
        .catch(console.error);
    }
  }).catch(console.log(err));
};


