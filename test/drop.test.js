import drop from '../src/drop';
test('drops the first element of an array', () => {
  expect(drop([1, 2, 3])).toEqual([2, 3]);
  expect(drop([1, 2, 3], 2)).toEqual([3]);
});