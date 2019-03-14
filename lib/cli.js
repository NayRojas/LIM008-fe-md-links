#!/usr/bin/env node
const mdLinks = require('./md-links.js');
const statsLink = require('../src/services/fnStats');

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

if (!options.validate && !options.stats) {
  mdLinks(ruta)
    .then(response => {
      response.forEach(element => {
        console.log(`${element.route} ${element.href} ${element.text.substring(0,50)}\n`);
      });
    })
    .catch(console.error);
} 
if (options.validate && !options.stats) {
  mdLinks(ruta, options)
    .then(response => {
      response.forEach(element => {
        console.log(`${element.route} ${element.href} ${element.text.substring(0,50)} ${element.code} ${element.status}\n`);
      });
    })
    .catch(console.error);
}

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