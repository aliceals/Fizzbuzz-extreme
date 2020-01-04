import React from 'react'
import fizzbuzz from '../utils'

class FizzBuzz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wordArray: [],
            toggleFizzBuzz: false
        }
    }

    produceFizzBuzz = () => {

        this.setState({
            wordArray: fizzbuzz(),
            toggleFizzBuzz: true
        })

    }

    removeFizzBuzz = () => {
        this.setState({ wordArray: [], toggleFizzBuzz: false })
    }


    render() {
        return (
            <div className="fizzbuzz">
                <h3>Original fizzbuzz</h3>
                {this.state.toggleFizzBuzz == false && <button onClick={this.produceFizzBuzz}>Click for FizzBuzz</button>}
                {this.state.toggleFizzBuzz && <button onClick={this.removeFizzBuzz}>Delete FizzBuzz</button>}
                <ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i} > {word}</li>
                })}</ul>
            </div >
        )
    }

}

export default FizzBuzz