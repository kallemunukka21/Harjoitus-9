import toString from '../src/toString';

test('converts number to string', () => expect(toString(123)).toBe('123'));
// BUGI: Palauttaa "null" merkkijonon tyhjän sijaan
test('returns "null" string for null input', () => expect(toString(null)).toBe('null'));
// BUGI: Palauttaa "undefined" merkkijonon tyhjän sijaan
test('returns "undefined" string for undefined input', () => expect(toString(undefined)).toBe('undefined'));
