import isObject from '../src/isObject';

test('returns true for plain object', () => expect(isObject({})).toBe(true));
test('returns true for array', () => expect(isObject([])).toBe(true));
test('returns true for function', () => expect(isObject(() => {})).toBe(true));
test('returns false for null', () => expect(isObject(null)).toBe(false));
test('returns false for number', () => expect(isObject(1)).toBe(false));
test('returns false for string', () => expect(isObject('hello')).toBe(false));
