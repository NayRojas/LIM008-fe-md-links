import { pathToAbsolute, pathFiles, linkExtract } from '../lib/path-controller.js';
const path = require('path'); 

describe('pathToAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof pathToAbsolute).toBe('function');
  });
  it('devuelve ruta absoluta (string) si resultado de isAbsolute() es false', () => {
    expect(pathToAbsolute('tests/file-test/file2-test/README1.md')).toBe(path.resolve((path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`))));
  });
});

describe('pathFiles', () => {
  it('debería ser una función', () => {
    expect(typeof pathFiles).toBe('function');
  });
  it('debería retornar un array con la ruta de los archivos solo con la extensión .md', () => {
    expect(pathFiles(path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`))))
      .toEqual(
        [ path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`))]
      );
  });
  it('debería retornar un array con la ruta del archivo con la extensión .md', () => {
    expect(pathFiles(path.resolve(path.join(`${process.cwd()}/tests/file-test`))))
      .toEqual(
        [
          path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
          path.resolve(path.join(`${process.cwd()}/tests/file-test/file3/README.md`)),
          path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
          path.resolve(path.join(`${process.cwd()}/tests/file-test/README2.md`)),
        ]
      );
  });
});

describe('linkExtract', () => {
  it('debería ser una función', () => {
    expect(typeof linkExtract).toBe('function');
  });
  it('debería retornar un array de objetos donde cada objeto contiene el href y text de link encontrado en los archivos ', (done) => {
    linkExtract(
      [ path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
        path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`))])
      .then((resolve) => {
        expect(resolve).toEqual(
          [ 
            { href: 'https://es.wikipedia.org/wiki/Markdown',
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
              text: 'Markdown' },
            { href: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
              text: 'Markdown' },
            { href: 'https://nodeschool.io/s/',
              route: path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
              text: 'Markdown' } 
          ]
        );
      });
    done();
  });
  // it('tests error with promises', (done) => {
  //   linkExtract('')
  //     .catch((reject) => {
  //       expect(reject).toBe();
  //     });
  //   done();
  // });
});