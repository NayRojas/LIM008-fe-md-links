import { linkValidate } from '../lib/services/fnValidate.js'


describe.skip('linkValidate', () => {
  it('debería ser una función', () => {
    expect(typeof linkValidate).toBe('function');
  });
  it('debería retornar el código http al hacer la petición http para conocer si el link funciona o no', (done) => {
    linkValidate(
      [
        { route:'C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta1\\README1.md',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown' },
       { route:'C:\\Users\\Laboratoria\\Desktop\\canchita\\README.md',
        href: 'https://es.wikipedia.org/wiki/Markdowntome',
        text: 'Markdown' },
        { route:'C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta2\\README.md',
        href: 'https://es.noexiste.org/',
        text: 'Markdown' }
      ]
    ).then(arrayLinks => {
      expect(arrayLinks).toEqual([
      {"code": 200, 
      "href": "https://es.wikipedia.org/wiki/Markdown", 
      "route": "C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta1\\README1.md",
      "status": "OK",
      "text": "Markdown",
      }, 
      {"code": 404,
      "href": "https://es.wikipedia.org/wiki/Markdowntome", 
      "route": "C:\\Users\\Laboratoria\\Desktop\\canchita\\README.md",
      "status": "FAIL",
      "text": "Markdown",
      }, 
      {"code": "Página no encontrada",
      "href": "https://es.noexiste.org/", 
      "route": "C:\\Users\\Laboratoria\\Desktop\\canchita\\carpeta2\\README.md",
      "status": "FAIL",
      "text": "Markdown",
      }]);
      done();
    });
  });
});