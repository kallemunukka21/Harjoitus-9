import upperFirst from '../src/upperFirst';

test('capitalizes first letter', () => expect(upperFirst('hello')).toBe('Hello'));
test('does not change already capitalized', () => expect(upperFirst('Hello')).toBe('Hello'));
test('empty string returns empty', () => expect(upperFirst('')).toBe(''));
test('single character', () => expect(upperFirst('a')).toBe('A'));
