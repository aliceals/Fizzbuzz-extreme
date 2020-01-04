import fizzbuzz from './utils'



test('Fizzbuzz returns an array with the 9th item as Fizz', function () {
    let expected = 'Fizz'
    let actual = fizzbuzz()[8]
    expect(actual).toEqual(expected)
})

test('Fizzbuzz returns an array with the 20th item as Buzz', function () {
    let expected = 'Buzz'
    let actual = fizzbuzz()[19]
    expect(actual).toEqual(expected)
})

test('Fizzbuzz returns an array with the 30th item as FizzBuzz', function () {
    let expected = 'FizzBuzz'
    let actual = fizzbuzz()[29]
    expect(actual).toEqual(expected)
})

test('Fizzbuzz returns an array with the 11th as the correct number', function () {
    let expected = 11
    let actual = fizzbuzz()[10]
    expect(actual).toEqual(expected)
})

test('There are the correct number of Fizz', function () {
    let expected = 27
    let actual = fizzbuzz().filter((e) => e === "Fizz")
    expect(actual).toHaveLength(expected)
})

test('There are the correct number of Buzz', function () {
    let expected = 14
    let actual = fizzbuzz().filter((e) => e === "Buzz")
    expect(actual).toHaveLength(expected)
})

test('There are the correct number of FizzBuzz', function () {
    let expected = 6
    let actual = fizzbuzz().filter((e) => e === "FizzBuzz")
    expect(actual).toHaveLength(expected)
})

test('Matchers snapshot', function () {
    expect(fizzbuzz()).toMatchSnapshot()
})