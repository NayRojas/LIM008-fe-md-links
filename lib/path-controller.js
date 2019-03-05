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

export const pathFiles = (route) => {
  let pathArray = [];
    if ( fs.lstatSync(route).isFile() === true) {
      if (path.extname(route) === '.md' ) {
        pathArray.push(route);
        }
      //${path.extname(route)=== '.md' ? pathArray.push(route) : ''}
      } else {
        fs.readdirSync(route).forEach((file) => {
        //pathArray = pathArray.join(route, file)
        //pathArray = pathArray.concat(`${route}\\${file}`)
        pathArray = pathArray.concat(pathFiles(path.join(route, file)));
      })
    } 
    return pathArray;
  };

export const linkExtract = (arrRoutes) => {
  const objLinks = [];
  arrRoutes.forEach((mdRoute) => {
    const fileContentArr = fs.readFileSync(mdRoute,'utf-8');
    const erLinks = /\[((.+?))\]\((http|https).+?\)/g;
    const erHref = /\((http|https).+?\)/g;
    const erTextLink = /\[.+?\]/g;   
    const linksArr = fileContentArr.match(erLinks);
    linksArr.forEach((link) => {
      const txtHref = link.match(erHref).toString();
      const txtText = link.match(erTextLink).toString();
      objLinks.push({
        route: path.resolve(mdRoute),
        href: txtHref.substring(1, txtHref.length -1),
        text: txtText.substring(1, txtText.length -1),
      })
    })
  })
  return objLinks;
};
console.log(linkExtract(
  [ 'C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta1\\README1.md',
'C:\\Users\\Laboratoria\\Desktop\\canchita\\README.md' ]));


export const validateLink = (link) => {
  return new Promise
  /*((resolve, reject) => {
    const myRequest = new Request('myRequest')
    resolve ([
      fetch(myRequest).then((response){
        console.log(response.status)
      })
    ]);
    reject([]);
  })
  checkLinkStatus(link.href, (error, result){
    if(result.httpCode >= 200 && result.httpCode =< 300) {
      link.code = result.code;
      link.status = 'OK'
    }
  })*/
}
