#!/usr/bin/env node
const mdLinks = require('./md-links.js');
const [, , ...params] = process.argv;

const options = {
  validate: true,
  stats: false
};

mdLinks(path, options)
  .then(links => {

    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks(path, { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks(path)
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

