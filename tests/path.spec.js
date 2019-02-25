// Aquí deberían estar los tests de la función extraer links y almacenarlos en un array de objetos --- index.js
const mdLinks = require('./index')
const fnStats = require('./index')
const fnValidate = require('./index')

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
});
  
describe('fnStats', () => {
  it('debería ser una función', () => {
  expect(typeof fnStats).toBe('function');
  });
});

describe('fnValidate', () => {
  it('debería ser una función', () => {
  expect(typeof fnValidate).toBe('function');
  });
});