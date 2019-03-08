/**
 * 
 * @param {es un array de objetos proveniente de la funcion validate links } linkArray 
 * @return { un objeto en el que sus propiedades son number} 
 */

// este es un array de objetos
export const fnStats = (linksArrayObj) => {
  return new Promise((resolve) => {
    // este es el objeto de los total y uniques
    const stats = {};
    // este es el array de objetos de los href´s 
    const arrHref = []; 
    linksArrayObj.map((objLinkFromArray) => {
      arrHref.push(objLinkFromArray.href);
    });
    stats.total = arrHref.length;
    stats.unique = [...new Set([arrHref])].length;
    resolve(stats);
  });
};