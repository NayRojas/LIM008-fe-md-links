const mdLinks = require('../lib/md-links');
const path = require('path');

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('devuelve un arreglo de 3 rutas relativas, links y sus textos', (done) => {
    mdLinks(path.resolve(path.join(`${process.cwd()}/tests/file-test`)))
      .then((resolve) => {
        expect(resolve).toEqual(
          [
            {
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
            },
            { 
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
              href: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
              text: 'Markdown',
            },
            { 
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file3/README.md`)),
              href: 'https://es.noexiste.org/',
              text: 'Markdown',
            },
            { 
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
              href: 'https://nodeschool.io/s/',
              text: 'Markdown', 
            }
          ]
        );
      });
    done();
  });
  it('devuelve un arreglo de 3 rutas relativas, links, textos, código de retorno y status. 2 con fail', (done) => {
    mdLinks(path.resolve(path.join(`${process.cwd()}/tests/file-test`)), {validate: true})
      .then((resolve) => {
        expect(resolve).toEqual(
          [
            {
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
              code: 200,
              status: 'OK'
            },
            { 
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
              href: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
              text: 'Markdown',
              code: 200,
              status: 'OK'
            },
            { 
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file3/README.md`)),
              href: 'https://es.noexiste.org/',
              text: 'Markdown',
              code: 'URL must be checked',
              status: 'FAIL'
            },
            { 
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
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
  // it('devuelve un arreglo vacio', (done) => {
  //   mdLinks(path.join(`${process.cwd()}/tests/file-test/README2.md`))
  //     .then((resolve) => {
  //       expect(resolve).toEqual([]);
  //     });
  //   done();
  // });
});