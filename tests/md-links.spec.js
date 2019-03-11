// const mdLinks = require('..//md-links');
import { mdLinks } from '../md-links.js';
const path = require('path');

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('devuelve una ruta relativa convertida en absoluta junto a un objecto con su href y text', (done) => {
    mdLinks('tests\\file-test')
      .then((resolve) => {
        expect(resolve).toEqual(
          [
            {
              href: 'https://es.wikipedia.org/wiki/Markdown',
              route: path.normalize(path.join(__dirname, 'file-test\\file2-test\\README1.md')),
              text: 'Markdown',
            },
            { 
              href: 'https://es.noexiste.org/',
              route: path.normalize(path.join(__dirname, 'file-test\\file3\\README.md')),
              text: 'Markdown',
            },
            { 
              href: 'https://nodeschool.io/s/',
              route: path.normalize(path.join(__dirname, 'file-test\\README.md')),
              text: 'Markdown', 
            }
          ]
        );
      });
    done();
  });
});