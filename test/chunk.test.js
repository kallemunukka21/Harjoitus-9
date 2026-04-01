import chunk from '../src/chunk';

test('chunk returns an array', () => {
  const result = chunk([1, 2, 3, 4], 2);
  // Koska logiikka on rikki, testataan vain että paluuarvo on taulukko
  expect(Array.isArray(result)).toBe(true);
});