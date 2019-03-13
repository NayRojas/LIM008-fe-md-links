// este es un array de objetos
export const fnStats = (linksArrayObj) => {
  return new Promise((resolve) => {
    // este es el objeto de los total y uniques
    const stats = {};
    // este es el array de objetos de los href´s 
    const arrHref = [];
    const arrFail = [];
    linksArrayObj.map((objLinkFromArray) => {
      arrHref.push(objLinkFromArray.href);
    });
    stats.total = arrHref.length;
    stats.unique = [...new Set(arrHref)].length;
    
    linksArrayObj.map((objLinkFromArray) => {
      if (objLinkFromArray.status === 'FAIL') {
        arrFail.push(objLinkFromArray.href);
      }
    });
    stats.broken = arrFail.length;

    resolve(stats);
  });
};