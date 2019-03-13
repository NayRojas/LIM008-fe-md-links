import { linkValidate } from '../lib/services/fnValidate.js';

const fetchMock = require('../_mock_/fetch-mock.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;

describe('linkValidate', () => {
  it('Debería devolver un array con un objeto correspondiente a un link válido', async() => {
    fetchMock.get('https://es.wikipedia.org/wiki/Markdown', { code: 200, status: 'OK'});
    const data = await linkValidate([{ 'href': 'https://es.wikipedia.org/wiki/Markdown', 'route':
    'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md',
      'text': 'Markdown',
       }]);
    expect(data).toEqual([{'code': 200, 'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\file2-test\\README1.md', 'status': 'OK', 'text': 'Markdown'}]);
  });
  it('Debería devolver un array con un objeto correspondiente a un link inválido', async() => {
    fetchMock.get('https://nodeschool.io/s/', { code: 404, status: 'FAIL'});
    const data = await linkValidate([{ href: 'https://nodeschool.io/s/',
      text: 'Markdown',
      file:
     'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md' }]);
    expect(data).toEqual([{'code': 404, 'href': 'https://nodeschool.io/s/', 'route': 'C:\\Users\\Laboratoria\\Desktop\\Nay Rojas\\Tech training\\Projects\\Markdown\\LIM008-fe-md-links\\tests\\file-test\\README.md', 'status': 'FAIL', 'text': 'Markdown'}]);
  });
});