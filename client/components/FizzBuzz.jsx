import React from 'react'

class FizzBuzz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wordArray: [],
            toggleFizzBuzz: false
        }
    }

    produceFizzBuzz = () => {
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
        this.setState({
            wordArray: thisWordArray,
            toggleFizzBuzz: true
        })

    }

    removeFizzBuzz = () => {
        this.setState({ wordArray: [], toggleFizzBuzz: false })
    }


    render() {
        return (
            <React.Fragment>
                <h2>This will be the fizz buzz </h2>

                {this.state.toggleFizzBuzz == false && <button onClick={this.produceFizzBuzz}>Click for FizzBuzz</button>}
                {this.state.toggleFizzBuzz && <button onClick={this.removeFizzBuzz}>Delete FizzBuzz</button>}
                <ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i}>{word}</li>
                })}</ul>
            </React.Fragment>
        )
    }

}

export default FizzBuzz