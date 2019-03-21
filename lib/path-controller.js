const fs = require('fs');
const path = require('path');

export const pathToAbsolute = (route) => {
  if (!path.isAbsolute(route)) 
    return path.resolve(route);
};

export const pathFiles = (route) => {
  let pathArray = [];
  if (fs.lstatSync(route).isFile()) {
    if (path.extname(route) === '.md' || path.extname(route) === '.markdown' || path.extname(route) === '.MD' || path.extname(route) === '.mkd') {
      pathArray.push(route);
    }
  } else {
    fs.readdirSync(route).forEach((file) => {
      pathArray = pathArray.concat(pathFiles(path.join(route, file)));
    });
  } 
  return pathArray;
};

export const linkExtract = (arrRoutes) => {
  const objLinks = [];
  return new Promise((resolve, reject) => {
    arrRoutes.forEach((mdRoute) => {
      const fileContentArr = fs.readFileSync(mdRoute, 'utf-8');
      const regExLinks = /(^|[^!])\[((.+?))\]\(().+?\)/g;
      const regExHref = /\((http|https).+?\)/g;
      const regExText = /\[.+?\]/g;
      const linksArr = fileContentArr.match(regExLinks); 
      if (linksArr) {
        linksArr.forEach((link) => {
          const txtHref = link.match(regExHref).toString();
          const txtText = link.match(regExText).toString();
          objLinks.push({
            route: mdRoute,
            href: txtHref.substring(1, txtHref.length - 1),
            text: txtText.substring(1, txtText.length - 1),
          });
        });
      }
    });
    resolve(objLinks);
    if (!arrRoutes) {
      reject({error: 'Type a valid route'});
    }
  }); 
};