#!/usr/bin/env node
const mdLinks = require('./md-links.js');
const path = require('path');
// import { mdLinks } from '../md-links.js';

const [, , ...params] = process.argv;

const options = {
  validate: false,
  stats: false
};
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

if (!options.validate && !options.stats) {
  mdLinks(ruta)
    .then(response => {
      response.forEach(element => {
        console.log(`${element.route}, ${element.href}, ${element.text}`);
      });
    })
    .catch(console.error);
} 
if (options.validate && !options.stats) {
  mdLinks(ruta, options)
    .then(response => {
      response.forEach(element => {
        console.log(`${element.route}, ${element.href}, ${element.text}, ${element.code}, ${element.status}`);
      });
    })
    .catch(console.error);
}
if (options.stats && !options.validate) {
  mdLinks(ruta, options)
    .then(response => {
      // response.forEach((element) => {
      console.log(`Total: ${response.total}, \nUnique: ${response.unique}`);
      // });
    })
    .catch(console.error);
}
if (options.stats && options.validate ) {
  mdLinks(ruta, options)
    .then(response => {
      // response.forEach((element) => {
      console.log(`Total: ${response.total}, \nUnique: ${response.unique}, \nBroken: ${response.broken}`);
      // });
    }).catch(console.error);
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