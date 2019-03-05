// Aquí deberían estar los tests de la función extraer links y almacenarlos en un array de objetos --- index.js
import { pathToAbsolute, isAbsolute, pathFiles, readPath, linkExtract } from '../lib/path-controller.js'

describe.skip('isAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('devuelve true si ruta es absoluta', () => {
    expect(isAbsolute('C:\\carpeta2\\archivo1.md')).toBe(true);
});
  it('devuelve false si ruta es relativa', () => {
      expect(isAbsolute('carpeta2\\archivo1.md')).toBe(false);
  });
});

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

describe('linkExtract', () => {
  it('debería ser una función', () => {
    expect(typeof linkExtract).toBe('function');
  });
  it('debería retornar un array de objetos donde cada objeto contiene el href y text de link encontrado en los archivos ', () => {
    expect(linkExtract(
      [ 'C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta1\\README1.md',
      'C:\\Users\\Laboratoria\\Desktop\\canchita\\README.md' ]))
    .toEqual(
      [ { route:'C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta1\\README1.md',
       href: 'https://es.wikipedia.org/wiki/Markdown',
       text: 'Markdown' },
      { route:'C:\\Users\\Laboratoria\\Desktop\\canchita\\README.md',
       href: 'https://es.wikipedia.org/wiki/Markdown',
       text: 'Markdown' } ]
    );
  });
});