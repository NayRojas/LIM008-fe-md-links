import { fnStats } from '../lib/services/fnStats.js';

describe('fnStats', () => {
  it('debería ser una función', () => {
    expect(typeof fnStats).toBe('function');
  });
  it.only('devuelva un objeto con las variables total, unique y broken. 3 links, todos diferentes, sin información de status', (done) => {
    fnStats(
      [  
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\file2-test\README1.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\file3\README.md',
          href: 'https://es.noexiste.org/',
          text: 'Markdown'
        },
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\README.md',
          href: 'https://nodeschool.io/s/',
          text: 'Markdown'
        }
      ])
      .then(stats => {
        expect(stats).toEqual({'total': 3, 'unique': 3, 'broken': 0});
        done();
      });
  });
  it.only('devuelva un objeto con las variables total, unique y broken. 3 links, todos iguales, sin información de status', (done) => {
    fnStats(
      [  
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\file2-test\README1.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\file3\README.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\README.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        }
      ])
      .then(stats => {
        expect(stats).toEqual({'total': 3, 'unique': 1, 'broken': 0});
        done();
      });
  });
  it.only('devuelva un objeto con las variables total, unique y broken. 3 links, todos diferentes, 2 links rotos', (done) => {
    fnStats(
      [  
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\file2-test\README1.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          code: '500',
          status: 'FAIL'
        },
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\file3\README.md',
          href: 'https://es.noexiste.org/',
          text: 'Markdown',
          code: '200',
          status: 'OK'
        },
        {
          route: 'C:\Users\Laboratoria\Desktop\Nay Rojas\Tech training\Projects\Markdown\LIM008-fe-md-links\tests\file-test\README.md',
          href: 'https://nodeschool.io/s/',
          text: 'Markdown',
          code: '403',
          status: 'FAIL'
        }
      ])
      .then(stats => {
        expect(stats).toEqual({'total': 3, 'unique': 3, 'broken': 2});
        done();
      });
  });
  it.only('devuelva un objeto con las variables total, unique y broken. 0 links', (done) => {
    fnStats([])
      .then(stats => {
        expect(stats).toEqual({'total': 0, 'unique': 0, 'broken': 0});
        done();
      });
  });
});