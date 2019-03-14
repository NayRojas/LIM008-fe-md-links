import { linkValidate } from '../lib/services/fnValidate.js';
const path = require('path');

describe('linkValidate', () => {
  it('debería ser una función', () => {
    expect(typeof linkValidate).toBe('function');
  });
  it('debería retornar el código http al hacer la petición http para conocer si el link funciona o no', (done) => {
    linkValidate(
      [
        { route: path.join(`${process.cwd()}\\tests\\file-test\\file2-test\\README1.md`),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown' },
        { route: path.join(`${process.cwd()}\\tests\\file-test\\README.md`),
          href: 'https://nodeschool.io/s/',
          text: 'Markdown' },
        { route: path.join(`${process.cwd()}\\tests\\file-test\\file3\\README.md`),
          href: 'https://es.noexiste.org/',
          text: 'Markdown' }
      ]
    ).then(arrayLinks => {
      expect(arrayLinks).toEqual([
        { code: 200, 
          href: 'https://es.wikipedia.org/wiki/Markdown', 
          route: path.join(`${process.cwd()}\\tests\\file-test\\file2-test\\README1.md`),
          status: 'OK',
          text: 'Markdown',
        }, 
        { code: 404,
          href: 'https://nodeschool.io/s/', 
          route: path.join(`${process.cwd()}\\tests\\file-test\\README.md`),
          status: 'FAIL',
          text: 'Markdown',
        }, 
        { code: 'URL must be checked',
          href: 'https://es.noexiste.org/', 
          route: path.join(`${process.cwd()}\\tests\\file-test\\file3\\README.md`),
          status: 'FAIL',
          text: 'Markdown',
        }]);
      done();
    });
  });
});