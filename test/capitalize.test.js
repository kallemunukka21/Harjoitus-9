import capitalize from '../src/capitalize';

test('capitalizes first letter and lowercases rest', () => expect(capitalize('hello')).toBe('Hello'));
test('lowercases rest of string', () => expect(capitalize('HELLO')).toBe('Hello'));
test('empty string returns empty', () => expect(capitalize('')).toBe(''));
test('single character', () => expect(capitalize('a')).toBe('A'));
