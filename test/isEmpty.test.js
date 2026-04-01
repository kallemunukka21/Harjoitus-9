import isEmpty from '../src/isEmpty';
test('checks if value is empty', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(true)).toBe(true);
  expect(isEmpty([1, 2, 3])).toBe(false);
  expect(isEmpty('abc')).toBe(false);
});