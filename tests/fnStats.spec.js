import { fnStats } from '../lib/services/fnStats.js';
const path = require('path');

describe('fnStats', () => {
  it('debería ser una función', () => {
    expect(typeof fnStats).toBe('function');
  });
  it('devuelva un objeto con las variables total, unique y broken. 3 links, todos diferentes, sin información de status', (done) => {
    fnStats(
      [  
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file3/README.md`)),
          href: 'https://es.noexiste.org/',
          text: 'Markdown'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
          href: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
          text: 'Markdown'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
          href: 'https://nodeschool.io/s/',
          text: 'Markdown'
        }
      ])
      .then(stats => {
        expect(stats).toEqual({'total': 4, 'unique': 4, 'broken': 0});
        done();
      });
  });
  it('devuelva un objeto con las variables total, unique y broken. 3 links, todos iguales, sin información de status', (done) => {
    fnStats(
      [  
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file3/README.md`)),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown'
        }
      ])
      .then(stats => {
        expect(stats).toEqual({'total': 3, 'unique': 1, 'broken': 0});
        done();
      });
  });
  it('devuelva un objeto con las variables total, unique y broken. 3 links, todos diferentes, 2 links rotos', (done) => {
    fnStats(
      [  
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file2-test/README1.md`)),
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          code: '500',
          status: 'FAIL'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/file3/README.md`)),
          href: 'https://es.noexiste.org/',
          text: 'Markdown',
          code: '200',
          status: 'OK'
        },
        {
          route: path.resolve(path.join(`${process.cwd()}/tests/file-test/README.markdown`)),
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
  it('devuelva un objeto con las variables total, unique y broken. 0 links', (done) => {
    fnStats([])
      .then(stats => {
        expect(stats).toEqual({'total': 0, 'unique': 0, 'broken': 0});
        done();
      });
  });
});