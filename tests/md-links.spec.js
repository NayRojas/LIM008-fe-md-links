import { mdLinks } from '../md-links.js';

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it.only('devuelve una ruta relativa convertida en absoluta junto a un objecto con su href y text', (done) => {
    mdLinks('tests\\file-test')
      .then((resolve) => {
        expect(resolve).toEqual(
          [ 
            { route: path.normalize(path.join(__dirname, 'file-test\\file2-test\\README1.md')),
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown hola' },
            { route: path.normalize(path.join(__dirname, 'file-test\\file3\\README.md')),
              href: 'https://es.noexiste.org/',
              text: 'Markdown' },
            { route: path.normalize(path.join(__dirname, 'file-test\\README.md')),
              href: 'https://nodeschool.io/s/',
              text: 'Markdown' } ]
        );
      });
    done();
  });
  it('debería retornar un array de objetos con las propiedades href, text, file', () => {
    expect(mdLinks('C:/tests/file-test/file2-test/README1.md')).then(resolve => {
      expect(resolve).toEqual(
        [{
          route: 'C:/tests/file-test/file2-test/README1.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
        }] 
      );
    });
  }),
  it('debería retornar un array de objetos con las propiedades href, text, file, status HTTP, OK o FAIL', () => {
    expect(mdLinks('C:/tests/file-test/file2-test/README1.md', {validate: true})).then(resolve => {
      expect(resolve).toEqual(
        [{
          route: 'C:/tests/file-test/file2-test/README1.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          status: 'OK',
          code: 200
        }, 
        {
          route: 'C:/tests/file-test/file2-test/README1.md',
          href: 'https://nodefeo.org/es/',
          text: 'Node.js',
          status: 'FAIl',
          code: 0
        }]
      );
    });
  });
  it('debería retornar un objetos con las propiedades total (links totales encontrados en el archivo) y unique (links únicos del archivo)', () => {
    expect(mdLinks('C:/tests/file-test/file2-test/archivo.md', {stats: true})).then(resolve => {
      expect(resolve).toEqual(
        {
          total: '5',
          unique: '1',
        }
      );
    });
  }),
  it('debería retornar un objetos con las propiedades total (links totales encontrados en el archivo) y unique (links únicos del archivo)', () => {
    expect(mdLinks('C:/tests/file-test/file2-test/archivo.md', {validate: true, stats: true})).then(resolve => {
      expect(resolve).toEqual(
        {
          total: '5',
          unique: '1',
          broken: '1'
        }
      );
    });
  });
  done();
});