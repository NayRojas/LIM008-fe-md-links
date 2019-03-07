import { linkValidate } from '../lib/services/fnValidate.js'


describe.skip('linkValidate', () => {
  it('debería ser una función', () => {
    expect(typeof linkValidate).toBe('function');
  });
  it('debería retornar el código http al hacer la petición http para conocer si el link funciona o no', (done) => {
    linkValidate(
      [{ href: 'https://es.wikipedia.org/wiki/Markdown'},
      {href: 'https://es.wikipedia.org/wiki/Markdown'}]
    ).then(arrayLinks => {
      expect(arrayLinks).toEqual([{"code": 200, "href": "https://es.wikipedia.org/wiki/Markdown", "status": "OK"}, {"code": 200,
      "href": "https://es.wikipedia.org/wiki/Markdown", "status": "OK"}]);
      done();
    });
  });
});

describe.skip('linkValidate', () => {
    it('debería ser una función', () => {
      expect(typeof linkValidate).toBe('function');
    });
    it('debería retornar un array de objetos con las propiedades href, file, text, status, http', () => {
      expect(linkValidate('C:/tests/file-test/file2-test/README1.md').then(resolve => {
        expect(resolve).toEqual(
          [{
            file: 'C:/tests/file-test/file2-test/README1.md',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            status: 'OK',
            http: 200
          }, 
          {
            file: 'C:/tests/file-test/file2-test/README1.md',
            href: 'https://nodefeo.org/es/',
            text: 'Node.js',
            status: 'FAIl',
            http: 0
          }]
        )
    }))
  })
});