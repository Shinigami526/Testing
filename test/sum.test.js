import sum from '../exercises/sum';

test('exercise sum', () => {
    expect(sum(2,2)).toBe(4)
    expect(sum(2,2)).toBeGreaterThan(3)
})