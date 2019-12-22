import React from 'react'

class Controls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wordArray: [],
            toggleFizzBuzz: false
        }
    }

    produceAbletech = () => {
        let thisWordArray = []

        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                thisWordArray.push("Abletech")
            } else if (i % 3 === 0) {
                thisWordArray.push("Able")
            } else if (i % 5 === 0) {
                thisWordArray.push("tech")
            } else {
                thisWordArray.push(i)
            }
        }
        this.setState({
            wordArray: thisWordArray,
            toggleFizzBuzz: true
        })

    }

    removeAbletech = () => {
        this.setState({ wordArray: [], toggleFizzBuzz: false })
    }


    render() {
        return (
            <React.Fragment>
                {this.state.toggleFizzBuzz == false && <button onClick={this.produceAbletech}>Wonder what this button does?</button>}
                {this.state.toggleFizzBuzz && <button onClick={this.removeAbletech}>Delete Abletech</button>}
                <ul> {this.state.wordArray.map((word, i) => {
                    return <li key={i} > {word}</li>
                })}</ul>
            </React.Fragment >
        )
    }

}

export default Controls