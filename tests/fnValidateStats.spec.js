import { fnValidateStats } from '../lib/services/fnValidateStats.js'

describe('statsValidate', () => {
    it('debería ser una función', () => {
      expect(typeof fnValidateStats).toBe('function');
    });
    it.only('debería retornar un array de objetos con las propiedades total, unique y broken donde sus valores sean numbers', (done) => {
      fnValidateStats(
            [
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
                }]
        ).then(arrayLinks => {
          expect(arrayLinks).toEqual([{
            "broken": 2,
            }]);
          done();
        });
      });
  });