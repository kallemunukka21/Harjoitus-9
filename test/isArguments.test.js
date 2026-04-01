import isArguments from '../src/isArguments';

test('returns true for arguments object', () => {
  function test() { return isArguments(arguments); }
  expect(test()).toBe(true);
});
test('returns false for array', () => expect(isArguments([])).toBe(false));
test('returns false for object', () => expect(isArguments({})).toBe(false));
