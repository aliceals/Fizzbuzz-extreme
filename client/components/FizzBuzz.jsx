import React from 'react'

class FizzBuzz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: ""
        }
    }

    produceFizzBuzz = () => {
        console.log("in here")
        console.log(this.state)
        for (let i = 0; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                this.setState({ word: "FizzBuzz" })
            } else if (i % 3 === 0) {
                this.setState({ word: "Fizz" })
            } else if (i % 5 === 0) {
                this.setState({ word: "Buzz" })
            } else {
                this.setState({ word: i })
            }
        }
    }


    render() {
        return (
            <React.Fragment>
                <h2>This will be the fizz buzz </h2>

                <button onClick={this.produceFizzBuzz}>Click for FizzBuzz</button>
                <h3>{this.state.word}</h3>
            </React.Fragment>
        )
    }

}

export default FizzBuzz