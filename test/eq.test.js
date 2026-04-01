import eq from '../src/eq';
test('checks if two values are equivalent', () => {
  const object = { 'a': 1 };
  expect(eq(object, object)).toBe(true);
  expect(eq('a', 'a')).toBe(true);
});