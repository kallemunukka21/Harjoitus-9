import map from '../src/map';

test('maps array values', () => {
  expect(map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
});
test('returns empty array for empty input', () => {
  expect(map([], n => n * 2)).toEqual([]);
});
test('maps strings', () => {
  expect(map(['a', 'b'], s => s.toUpperCase())).toEqual(['A', 'B']);
});
