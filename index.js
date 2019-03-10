const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cliArgs = args._[0].split('=');
  const param1Key = cliArgs[0];
  const param1Value = cliArgs[1];

  switch (param1Key) {
  case 'path':
    require('./cli/path')(param1Value);
    break;
  default:
    console.error(`"${cliArgs}" no es argumento valido!`);
    break;
  }
};