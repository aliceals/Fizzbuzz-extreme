import React from 'react'
import fizzbuzz from './utils'

class FizzBuzz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wordArray: [],
            colorClass: [],
            toggleFizzBuzz: false,
            animate: false
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

    toggleAnimate = () => {
        this.setState({
            animate: !this.state.animate
        })
    }

    render() {
        return (
            <div className="fizzbuzz">
                <h2>Original fizzbuzz</h2>
                {this.state.toggleFizzBuzz === false && <button onClick={this.produceFizzBuzz}>Click for FizzBuzz</button>}
                {this.state.toggleFizzBuzz && <><button onClick={this.removeFizzBuzz}>Delete FizzBuzz</button> <button onClick={this.toggleAnimate}>Animate</button></>}
                {this.state.animate && <><h3>Hover over Fizz, Buzz and FizzBuzz</h3><ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i} class={word}> {word}</li>
                })}</ul> </>}
                {this.state.animate === false && <ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i}> {word}</li>
                })}</ul>}
            </div >
        )
    }

}

export default FizzBuzz