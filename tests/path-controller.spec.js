import { pathToAbsolute, pathFiles, linkExtract } from '../lib/path-controller.js';
const path = require('path'); 

describe('pathToAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof pathToAbsolute).toBe('function');
  });
  it('devuelve ruta absoluta (string) si resultado de isAbsolute() es false', () => {
    expect(pathToAbsolute('tests\\file-test\\file2-test\\README1.md')).toBe('C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md');
  });
});

describe('pathFiles', () => {
  it('debería ser una función', () => {
    expect(typeof pathFiles).toBe('function');
  });
  it('debería retornar un array con la ruta de los archivos solo con la extensión .md', () => {
    expect(pathFiles('C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test'))
      .toEqual(
        [ 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md',
          'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file3\\README.md',
          'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md',
          'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README2.md' ]
      );
  });
  it('debería retornar un array con la ruta del archivo con la extensión .md', () => {
    expect(pathFiles('C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md'))
      .toEqual(
        [ 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md' ]
      );
  });
});

describe('linkExtract', () => {
  it('debería ser una función', () => {
    expect(typeof linkExtract).toBe('function');
  });
  it('debería retornar un array de objetos donde cada objeto contiene el href y text de link encontrado en los archivos ', (done) => {
    linkExtract(
      [ 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md',
        'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md' ])
      .then((resolve) => {
        expect(resolve).toEqual(
        [ 
          { href: 'https://es.wikipedia.org/wiki/Markdown',
            route: path.normalize(path.join(__dirname, 'file-test/file2-test/README1.md')),
            text: 'Markdown' },
          { href: 'https://nodeschool.io/s/',
            route: path.normalize(path.join(__dirname, 'file-test/README.md')),
            text: 'Markdown' } 
          ]
        )
      })
      done();
    })
    it('tests error with promises', (done) => {
      linkExtract('')
      .catch((reject) => {
        expect(reject).toBe()
      })
      done();
    });
});