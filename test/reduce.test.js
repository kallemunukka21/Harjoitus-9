import reduce from '../src/reduce';

test('sums array values', () => {
  expect(reduce([1, 2, 3], (acc, n) => acc + n, 0)).toBe(6);
});
test('works without initial value', () => {
  expect(reduce([1, 2, 3], (acc, n) => acc + n)).toBe(6);
});
test('reduces to object', () => {
  const result = reduce(['a', 'b'], (acc, v) => { acc[v] = 1; return acc; }, {});
  expect(result).toEqual({ a: 1, b: 1 });
});
