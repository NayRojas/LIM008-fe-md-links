import { fnValidateStats } from '../lib/services/fnValidateStats.js';
const path = require('path'); 

describe.skip('statsValidate', () => {
  it('debería ser una función', () => {
    expect(typeof fnValidateStats).toBe('function');
  });
  it.only('debería retornar un array de objetos con las propiedades total, unique y broken donde sus valores sean numbers', (done) => {
    fnValidateStats(
      [
        {'code': 200, 
          'href': path.normalize('https://es.wikipedia.org/wiki/Markdown'), 
          'route': path.normalize(path.join(__dirname, 'tests/file-test/file2-test/README1.md')),
          'status': 'OK',
          'text': 'Markdown',
        }, 
        {'code': 404,
          'href': path.normalize('https://es.wikipedia.org/wiki/Markdowntome'), 
          'route': path.normalize(path.join(__dirname, 'tests/file-test/README.md')),
          'status': 'FAIL',
          'text': 'Markdown',
        }, 
        {'code': 'Página no encontrada',
          'href': path.normalize('https://es.noexiste.org/'), 
          'route': path.normalize(path.join(__dirname, 'tests/file-test/file3/README.md')),
          'status': 'FAIL',
          'text': 'Markdown',
        }]
    ).then(arrayLinkObj => {
      expect(arrayLinkObj).toEqual(
        {broken: 2});
      done();
    });
  });
});