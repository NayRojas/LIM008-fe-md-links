/*import { linkValidate } from '../services/fnValidate.js';

export const fnValidateStats = (arrayLinkObj) => {
  return new Promise((resolve, reject) => {
    const brokenLinksArrayObj = [];
    const onlyBroken = {};
    // esta variable es un array donde estaran almacenados aquellos links que tienen como valor FAIl en la propiedad status
    arrayLinkObj.map((link) => {
      if (link.status === 'FAIL') {
        // aquí va a almacenar los links que son FAIL
        brokenLinksArrayObj.push(link.href);
      }
      // Aquí arrayLinkObj va tener otra propiedad que sea broken y que su valor sea la longitud de los links rotos (que se almacenan en brokenLinksArrayObj como objeto)
      onlyBroken.broken = brokenLinksArrayObj.length;
    });
    resolve(onlyBroken);
  });
};

//Esta función debe retornar total uni, broken
*/