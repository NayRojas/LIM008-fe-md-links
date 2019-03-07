import { fnStats } from './fnStats.js'
import { linkValidate } from './fnValidate'

/**
 * 
 * @param {array de objetos donde cada link contiene su file, href, texto, code http y OK o FAIL, de aquí extraeré aquello links que sean FAIL como la longitud (number) de los broken} arrayLinkObj 
 * @return { array de objetos con las propiedades total, unique y broken, donde el valor de cada una es type number}
 */
export const fnValidateStats = (arrayLinkObj) => {
  return new Promise((resolve, reject) => {
    const resultArr = [];
    const brokenLinksArrayObj = []; // esta variable es un array donde estaran almacenados aquellos links que tienen como valor FAIl en la propiedad status
    arrayLinkObj.forEach((link) => {
      if(link.status === 'FAIL'){
        brokenLinksArrayObj.push(link.href)
      }
      const stats = fnStats(arrayLinkObj);
      stats.forEach((link) => {
        brokenLinksArrayObj.push(link.total, link.unique)
      })
      arrayLinkObj.broken = brokenLinksArrayObj.length;
    })
    console.log(brokenLinksArrayObj);
    resolve(brokenLinksArrayObj)
  })
}