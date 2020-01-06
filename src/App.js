import React from 'react'
import FizzBuzz from './FizzBuzz'
import Controls from './Controls'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <h1 className="title">FizzBuzz</h1>
        <div className="container">
          <FizzBuzz />
          <hr></hr>
          <Controls />
          <img src="../images/fizzbuzz.png" />
          <a class="github-fork-ribbon" href="https://url.to-your.repo" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>

        </div>
      </div>
    )
  }
}

export default App
