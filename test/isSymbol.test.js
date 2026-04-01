import isSymbol from '../src/isSymbol.js';

describe('isSymbol-funktion testit', () => {
  
  test('palauttaa true, kun syöte on Symbol', () => {
    expect(isSymbol(Symbol('a'))).toBe(true);
  });

  test('palauttaa false, kun syöte on merkkijono', () => {
    expect(isSymbol('abc')).toBe(false);
  });

  test('palauttaa false, kun syöte on numero', () => {
    expect(isSymbol(123)).toBe(false);
  });

  test('palauttaa false, kun syöte on null tai undefined', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
  });

});