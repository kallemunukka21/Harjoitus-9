import defaultTo from '../src/defaultTo';

test('returns value when it exists', () => expect(defaultTo(1, 10)).toBe(1));
test('returns default when null', () => expect(defaultTo(null, 10)).toBe(10));
test('returns default when undefined', () => expect(defaultTo(undefined, 10)).toBe(10));
// BUGI: Kirjasto palauttaa NaN eikä oletusarvoa 10
test('returns NaN when input is NaN (Library bug)', () => expect(defaultTo(NaN, 10)).toBeNaN());
