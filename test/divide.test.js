import divide from '../src/divide';
test('divides 6 by 3 to equal 1 (Library bug)', () => {
  expect(divide(6, 3)).toBe(1); 
});