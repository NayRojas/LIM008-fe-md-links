import { pathToAbsolute, pathFiles, readPath, linkExtract } from '../lib/path-controller.js';
const path = require('path'); 

describe.skip('pathToAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof pathToAbsolute).toBe('function');
  });
  it('devuelve ruta absoluta (string) si resultado de isAbsolute() es false', () => {
    expect(pathToAbsolute('tests\\file-test\\file2-test\\README1.md')).toBe('C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md');
  });
});

describe.skip('pathFiles', () => {
  it('debería ser una función', () => {
    expect(typeof pathFiles).toBe('function');
  });
  it('debería retornar un array con la ruta de los archivos solo con la extensión .md', () => {
    expect(pathFiles('C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test'))
      .toEqual(
        [ 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md',
          'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file3\\README.md',
          'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md' ]
      );
  });
});

describe.skip('readPath', () => {
  it('debería ser una función', () => {
    expect(typeof readPath).toBe('function');
  });
  it('debería retornar un array con el contenido de los archivos .md', () => {
    expect(readPath([ 'C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta1\\README1.md',
      'C:\\Users\\Laboratoria\\Desktop\\canchita\\README.md' ]))
      .toEqual(
        ['[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. ',
          '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. '
        ]
      );
  });
});

describe.skip('linkExtract', () => {
  it('debería ser una función', () => {
    expect(typeof linkExtract).toBe('function');
  });
  it('debería retornar un array de objetos donde cada objeto contiene el href y text de link encontrado en los archivos ', () => {
    expect(linkExtract(
      [ 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md',
        'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md' ]))
      .toEqual(
        [ 
          { href: 'https://es.wikipedia.org/wiki/Markdown',
            route: path.normalize(path.join(__dirname, 'file-test/file2-test/README1.md')),
            text: 'Markdown' },
          { href: 'https://es.wikipedia.org/wiki/Markdowntome',
            route: path.normalize(path.join(__dirname, 'file-test/README.md')),
            text: 'Markdown' } 
        ]
      );
  });
});