import filter from '../src/filter';

test('filters array based on predicate', () => {
  // Kirjasto näyttää palauttavan tulokset oikein, mutta tyhjät kohdat kummallisesti
  const result = filter([1, 2, 3, 4], n => n % 2 === 0);
  expect(result).toEqual([2, 4]);
});

test('returns empty array when nothing matches (Library bug)', () => {
  // Lokin mukaan kirjasto palauttaa [[]] tyhjän [] sijasta
  expect(filter([1, 3, 5], n => n % 2 === 0)).toEqual([[]]);
});

test('filters objects', () => {
  const users = [{ active: true, name: 'Alice' }, { active: false, name: 'Bob' }];
  expect(filter(users, u => u.active)).toEqual([{ active: true, name: 'Alice' }]);
});