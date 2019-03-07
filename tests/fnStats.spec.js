import { fnStats } from '../lib/services/fnStats.js'

describe.skip('fnStats', () => {
    it('debería ser una función', () => {
      expect(typeof fnStats).toBe('function');
    });
    it.only('devuelva un objeto con las propiedades total y unique y que su valor sea un string', (done) => {
      fnStats([{"code": 200, "href": "https://es.wikipedia.org/wiki/Markdown", "status": "OK"}, {"code": 200,
      "href": "https://es.wikipedia.org/wiki/Markdown", "status": "OK"}])
      .then(linksArray => {
          expect(linksArray).toEqual({"total": 2, "unique": 1})
          done();
      });
  });
});