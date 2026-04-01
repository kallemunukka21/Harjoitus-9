import isBoolean from '../src/isBoolean';

test('returns true for true', () => expect(isBoolean(true)).toBe(true));
test('returns true for false', () => expect(isBoolean(false)).toBe(true));
test('returns false for string', () => expect(isBoolean('true')).toBe(false));
test('returns false for number', () => expect(isBoolean(0)).toBe(false));
test('returns false for null', () => expect(isBoolean(null)).toBe(false));
