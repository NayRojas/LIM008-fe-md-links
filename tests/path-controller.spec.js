// Aquí deberían estar los tests de la función extraer links y almacenarlos en un array de objetos --- index.js
import { pathToAbsolute, isAbsolute } from '../lib/path-controller.js'


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

describe('pathToAbsolute', () => {
  it('debería ser una función', () => {
    expect(typeof pathToAbsolute).toBe('function');
  });
  it('devuelve ruta absoluta (string) si resultado de isAbsolute() es false', () => {
    expect(pathToAbsolute('tests\\file-test\\file2-test\\README1.md')).toBe('C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md');
  });
});