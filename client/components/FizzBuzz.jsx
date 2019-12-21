import React from 'react'

class FizzBuzz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wordArray: []
        }
    }

    produceFizzBuzz = () => {
        let thisWordArray = []

        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz")
                thisWordArray.push("fizzbuzz")
            } else if (i % 3 === 0) {
                console.log("fizz")
                thisWordArray.push("fizz")
            } else if (i % 5 === 0) {
                console.log("buzz")
                thisWordArray.push("buzz")
            } else {
                console.log(i)
                thisWordArray.push(i)
            }
        }
        this.setState({ wordArray: thisWordArray })
    }


    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <h2>This will be the fizz buzz </h2>

                <button onClick={this.produceFizzBuzz}>Click for FizzBuzz</button>
                <ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i}>{word}</li>
                })}</ul>
            </React.Fragment>
        )
    }

}

export default FizzBuzz