// todas las funciones deben ser llamadas en el expect de la variable 
// test por unidad de funcion
// no mezclar nombres de palabras reservadas con nombres de parametros
const fs = require('fs');
const path = require('path');

export const isAbsolute = (route) => {
  return path.isAbsolute(route) 
}

export const pathToAbsolute = (route) => {
  if ( isAbsolute(route) === false ) {
    const absolute = path.resolve(route);
    return absolute;
  // esto me retorna un string que representa una ruta absoluta
  }
  return route;
};