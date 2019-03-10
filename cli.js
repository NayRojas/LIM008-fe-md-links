const mdLinks = require('./md-links.js');
const [, , ...params] = process.argv;
console.log([, , ...params]);

const options = {
  validate: true,
  stats: false
};

{options.validate === --v && --validate ? true : false;}
{options.stats === --s && --stats ? true : false;}

mdLinks(path)
  .then(links => {
    console.log(`${links.file}, ${links.href}, ${links.text}`);
  })
  .catch(console.error);

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
  .catch(console.error);


