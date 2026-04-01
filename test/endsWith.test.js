import endsWith from '../src/endsWith';

test('returns true when string ends with target', () => expect(endsWith('hello', 'lo')).toBe(true));
test('returns false when string does not end with target', () => expect(endsWith('hello', 'he')).toBe(false));
test('empty target returns true', () => expect(endsWith('hello', '')).toBe(true));
test('works with position parameter', () => expect(endsWith('hello', 'el', 3)).toBe(true));
