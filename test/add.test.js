import add from '../src/add.js';

describe('Add-funktion testit', () => {
  
  test('laskee kaksi positiivista lukua oikein: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('laskee negatiivisen ja positiivisen luvun oikein: -5 + 5 = 0', () => {
    expect(add(-5, 5)).toBe(0);
  });

  // Testataan myös alkuperäisen koodin kommentissa ollut esimerkki!
  test('laskee esimerkin 6 + 4 oikein', () => {
    expect(add(6, 4)).toBe(10);
  });

});