import isDate from '../src/isDate';

test('returns true for Date object', () => expect(isDate(new Date())).toBe(true));
test('returns false for date string', () => expect(isDate('2024-01-01')).toBe(false));
test('returns false for number', () => expect(isDate(1234567890)).toBe(false));
test('returns false for null', () => expect(isDate(null)).toBe(false));
