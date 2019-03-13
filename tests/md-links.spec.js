const mdLinks = require('../lib/md-links');
//import { mdLinks } from '../md-links.js';
const path = require('path');

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('devuelve un arreglo de 3 rutas relativas, links y sus textos', (done) => {
    mdLinks('tests\\file-test')
      .then((resolve) => {
        expect(resolve).toEqual(
          [
            {
              route: path.normalize('tests\\file-test\\file2-test\\README1.md'),
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
            },
            { 
              route: path.normalize('tests\\file-test\\file3\\README.md'),
              href: 'https://es.noexiste.org/',
              text: 'Markdown',
            },
            { 
              route: path.normalize('tests\\file-test\\README.md'),
              href: 'https://nodeschool.io/s/',
              text: 'Markdown', 
            }
          ]
        );
      });
    done();
  });
  it('devuelve un arreglo de 3 rutas relativas, links, textos, código de retorno y status. 2 con fail', (done) => {
    mdLinks('tests\\file-test', {validate: true})
      .then((resolve) => {
        expect(resolve).toEqual(
          [
            {
              route: path.normalize('tests\\file-test\\file2-test\\README1.md'),
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
              code: 200,
              status: 'OK'
            },
            { 
              route: path.normalize('tests\\file-test\\file3\\README.md'),
              href: 'https://es.noexiste.org/',
              text: 'Markdown',
              code: 'URL must be checked',
              status: 'FAIL'
            },
            { 
              route: path.normalize('tests\\file-test\\README.md'),
              href: 'https://nodeschool.io/s/',
              text: 'Markdown',
              code: 404,
              status: 'FAIL'
            }
          ]
        );
      });
    done();
  });
  it('devuelve un arreglo vacio', (done) => {
    mdLinks('tests\\file-test\\README2.md')
      .then((resolve) => {
        expect(resolve).toEqual( [] );
      });
    done();
  });
});