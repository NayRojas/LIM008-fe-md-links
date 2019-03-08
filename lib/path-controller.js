const fs = require('fs');
const path = require('path');

export const pathToAbsolute = (route) => {
  if (!isAbsolute(route)) 
    return path.resolve(route);
};

export const pathFiles = (route) => {
  let pathArray = [];
  if (fs.lstatSync(route).isFile()) {
    if (path.extname(route) === '.md') {
      pathArray.push(route);
    }
  } else {
    fs.readdirSync(route).forEach((file) => {
      pathArray = pathArray.concat(pathFiles(path.join(route, file)));
    })
  } 
  return pathArray;
};

export const linkExtract = (arrRoutes) => {
  const objLinks = [];
  arrRoutes.forEach((mdRoute) => {
    const fileContentArr = fs.readFileSync(mdRoute, 'utf-8');
    const erLinks = /\[((.+?))\]\(().+?\)/g;
    const erHref = /\((http|https).+?\)/g;
    const erTextLink = /\[.+?\]/g;   
    const linksArr = fileContentArr.match(erLinks);
    linksArr.forEach((link) => {
      const txtHref = link.match(erHref).toString();
      const txtText = link.match(erTextLink).toString();
      objLinks.push({
        route: path.resolve(mdRoute),
        href: txtHref.substring(1, txtHref.length - 1),
        text: txtText.substring(1, txtText.length - 1),
      });
    });
  });
  return objLinks;
};