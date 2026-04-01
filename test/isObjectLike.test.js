import isObjectLike from '../src/isObjectLike';

test('returns true for plain object', () => expect(isObjectLike({})).toBe(true));
test('returns true for array', () => expect(isObjectLike([])).toBe(true));
test('returns false for null', () => expect(isObjectLike(null)).toBe(false));
test('returns false for function', () => expect(isObjectLike(() => {})).toBe(false));
test('returns false for number', () => expect(isObjectLike(1)).toBe(false));
