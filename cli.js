#!/usr/bin/env node
const mdLinks = require('./md-links.js');
const path = require('path');
const statsLink = require('./src/services/fnStats');
const statsBroken = require('./src/services/fnValidateStats');
const validatePath = require('./src/path-controller');

// import { mdLinks } from '../md-links.js';

const options = {
  validate: false,
  stats: false
};

const [, , ...params] = process.argv;
const [ruta, ...opts] = params;

opts.forEach((option) => {
  if ((option === '-v' || option === '--validate') && (option === '-s' || option === '--stats')) {
    options.validate = true;
    options.stats = true;
  }
  if (option === '-v' || option === '--validate') {
    options.validate = true;
  }
  if (option === '-s' || option === '--stats') {
    options.stats = true;
  }
});
/*
const absolutePath = validatePath.pathToAbsolute(ruta);
const pathArr = validatePath.pathFiles(absolutePath);
const routesArr = validatePath.linkExtract(pathArr);
const currentPath = fs.statSync(route);
{!path.isAbsolute(route) ? validatePath.pathToAbsolute(route) : currentPath;}
*/



if (!options.validate && !options.stats) {
  mdLinks(ruta)
    .then(response => {
      response.forEach(element => {
        console.log(`${element.route} \n${element.href} \n${element.text}\n`);
      });
    })
    .catch(console.error);
} 
if (options.validate && !options.stats) {
  mdLinks(ruta, options)
    .then(response => {
      response.forEach(element => {
        console.log(`${element.route} \n${element.href} \n${element.text} \n${element.code} \n${element.status}\n`);
      });
    })
    .catch(console.error);
}
//hasta aquí funciona  

if (options.stats && !options.validate) {
  mdLinks(ruta)
  .then(response1 => statsLink.fnStats(response1))
      .then(stats => { 
          console.log(`Total: ${stats.total} \nUnique: ${stats.unique}\n `);
        })
    .catch(console.error)
};

if (options.stats && options.validate ) {
  mdLinks(ruta, {validate: true})
  .then(response1 => statsLink.fnStats(response1))
      .then(stats1 => { 
          console.log(`Total: ${stats1.total} \nUnique: ${stats1.unique} \nBroken: ${stats1.broken}\n`);
        })
    .catch(console.error)
}

/* 
// import { mdLinks } from '../md-links.js';
import { param1Value } from '../index.js';
console.log(param1Key);

const options = {
  validate: true,
  stats: false
};

{options.validate === '-v' || '--validate' ? options.validate = true : options.validate = false;}
{options.stats === '-s' || '--stats' ? options.stats = true : options.stats = false;}


if (param1Value === 'path') {
  mdLinks(param1Value)
    .then(links => {
      console.log(`${links.file}, ${links.href}, ${links.text}`);
    })
    .catch(console.error);
  }
  */

// AQUI COÑO
/*


/*
mdLinks(path, { validate: true })
  .then(links => {
    console.log(`${links.route}, ${links.href}, ${links.text}, ${links.code}, ${links.status}`);
  })
  .catch(console.error);

mdLinks(path, { stats: true })
  .then(links => {
    console.log(`${links.total}, ${links.unique}`); 
  })
  .catch(console.error);

mdLinks(path, { validate: true, stats: true})
  .then(links => {
    console.log(`${links.total}, ${links.unique}, ${links.broken}`); 
  })
  .catch(console.error);*/