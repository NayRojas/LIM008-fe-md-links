const fs = require('fs');
const path = require('path');

const pathToAbsolute = (route) => {
  if (!path.isAbsolute(route)) 
    return path.resolve(route);
};

const pathFiles = (route) => {
  let pathArray = [];
  if (fs.lstatSync(route).isFile()) {
    if (path.extname(route) === '.md') {
      pathArray.push(route);
    }
  } else {
    fs.readdirSync(route).forEach((file) => {
      pathArray = pathArray.concat(pathFiles(path.join(route, file)));
    });
  } 
  return pathArray;
};

const linkExtract = (arrRoutes) => {
  const objLinks = [];
  return new Promise((resolve, reject) => {
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
    resolve(objLinks);
    if (!arrRoutes) {
      reject({error: 'Type a valid route'});
    }
  }); 
};