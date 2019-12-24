import React from 'react'

class Controls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleFizzBuzz: false,
            wordArray: []
        }
    }

    produceNewFizzbuzz = () => {
        let thisWordArray = []

        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                thisWordArray.push(this.state.first + " " + this.state.second)
            } else if (i % 3 === 0) {
                thisWordArray.push(this.state.first)
            } else if (i % 5 === 0) {
                thisWordArray.push(this.state.second)
            } else {
                thisWordArray.push(i)
            }
        }
        this.setState({
            wordArray: thisWordArray,
            toggleFizzBuzz: true
        })

    }

    removeNewFizzbuzz = () => {
        this.setState({ wordArray: ["Bye"], toggleFizzBuzz: false })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.produceNewFizzbuzz()
    }


    render() {
        return (
            <div className="controls">
                <h3>Make your own version of Fizzbuzz</h3>
                <h4>Add two words</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="first" >First word</label>
                    <input name="first" onChange={this.handleChange} type="string" placeholder="fizz"></input>
                    <label htmlFor="second">Second word</label>
                    <input name="second" onChange={this.handleChange} type="string" placeholder="buzz"></input>
                    <button type="submit">Submit</button>
                </form>
                {this.state.toggleFizzBuzz && <button onClick={this.removeNewFizzbuzz}>Delete</button>}

                <ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i} > {word}</li>
                })}</ul>
            </div>
        )
    }

}

export default Controls