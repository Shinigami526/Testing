import data from '../exercises/data';

test('test object', () => {
    data['work'] = 'facebook';
    expect(data)
        .toEqual({work:'facebook', age:26, name: 'javier', status: true})
})