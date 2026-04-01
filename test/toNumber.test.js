import toNumber from '../src/toNumber';

test('number stays as number', () => expect(toNumber(3.14)).toBe(3.14));
test('string number converts', () => expect(toNumber('3.14')).toBe(3.14));
test('infinity stays', () => expect(toNumber(Infinity)).toBe(Infinity));
test('null returns 0', () => expect(toNumber(null)).toBe(0));
test('empty string returns 0', () => expect(toNumber('')).toBe(0));
