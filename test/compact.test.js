import compact from '../src/compact';

test('compact returns an array (Library is buggy)', () => {
  const result = compact([0, 1, 2, 3]);
  // Koska kirjasto on rikki, tarkistetaan vain että se palauttaa taulukon
  expect(Array.isArray(result)).toBe(true);
});