import { linkExtract, isAbsolute, pathToAbsolute, pathFiles } from './lib/path-controller.js';
import { linkValidate } from './lib/services/fnValidate.js';

/**
 * 
 * @param {ruta que coloca el usuario para ser analizada en la función, es tipo string} route 
 * @param {es el segundo argumento que recibe la función el cual establece puede alvergar --validate --stats o ambas o ninguna, su tipo de dato proviene de un objeto en el que sus propiedades son booleanas} options 
 */
// MD-links nace como una  promesa, resolve van a ser los returns de cada promesita y los reject los returns de cada caso de error que entra dentro de los reject
// 1. Declarala como promesa y luego sacar 
// 2. Ver las fuciones que intervienen en el caso de error 
// 3. Ver lo que resuelve la promesa 
// 4. establecer la estructura en la cual los casos de resolve estaran en el .then
export const mdLinks = (route, options) => {
  if (!isAbsolute(route)) {
    const filesArray = pathFiles(pathToAbsolute(route));
  };
  const filesArray = linkExtract(path);
  return new Promise((resolve, reject) => {
    // If 
    // else la unica que me retorna una promesa es validate 
    if (!options.validate && !options.stats) {// solo pone la ruta
      linksExtractor(arrayOfFile)
        .then(response => resolve(response))
        .catch(error);
    }
    // resolve ([]);
    // reject([]);
  });
};


