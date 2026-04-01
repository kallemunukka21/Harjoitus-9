import toFinite from '../src/toFinite';

test('number stays as number', () => expect(toFinite(3.14)).toBe(3.14));
test('infinity becomes MAX_VALUE', () => expect(toFinite(Infinity)).toBe(1.7976931348623157e+308));
test('string number converts', () => expect(toFinite('3.14')).toBe(3.14));
test('null returns 0', () => expect(toFinite(null)).toBe(0));
