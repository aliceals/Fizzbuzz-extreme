function fizzBuzz() {
    let thisWordArray = []

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            thisWordArray.push("FizzBuzz")
        } else if (i % 3 === 0) {
            thisWordArray.push("Fizz")
        } else if (i % 5 === 0) {
            thisWordArray.push("Buzz")
        } else {
            thisWordArray.push(i)
        }
    }
    return thisWordArray
}

export default fizzBuzz
