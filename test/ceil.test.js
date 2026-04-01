import ceil from '../src/ceil';
test('rounds up 4.006 to 5', () => {
  expect(ceil(4.006)).toBe(5);
});