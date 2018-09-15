import num from '../exercises/num';

test('add factorial', () => {
    expect(num(7)).toBe(5040)
    expect(num(5)).toBe(120)
    expect(num(4)).toBe(24)
})