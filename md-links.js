import { linkExtract, isAbsolute, pathToAbsolute, pathFiles } from './lib/path-controller.js'
import { linkValidate } from './lib/services/fnValidate.js'

/**
 * 
 * @param {ruta que coloca el usuario para ser analizada en la función, es tipo string} route 
 * @param {es el segundo argumento que recibe la función el cual establece puede alvergar --validate --stats o ambas o ninguna, su tipo de dato proviene de un objeto en el que sus propiedades son booleanas} options 
 */
export const mdLinks = (route, options) => {

  if(!isAbsolute(route)) {
    const filesArray = pathFiles(pathToAbsolute(route));
  };
  const filesArray = linkExtract(path)
    return new Promise((resolve, reject) => {
      if (!options.validate && !options.stats) {//solo pone la ruta
        linksExtractor(arrayOfFile)
          .then(response => resolve(response))
          .catch(error)
      }
          //resolve ([]);
          //reject([]);
    })

};


