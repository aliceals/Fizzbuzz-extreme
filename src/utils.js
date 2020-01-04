function fizzBuzz() {
    let thisWordArray = []

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            thisWordArray.push("fizzbuzz")
        } else if (i % 3 === 0) {
            thisWordArray.push("fizz")
        } else if (i % 5 === 0) {
            thisWordArray.push("buzz")
        } else {
            thisWordArray.push(i)
        }
    }
    return thisWordArray
}

export default fizzBuzz
