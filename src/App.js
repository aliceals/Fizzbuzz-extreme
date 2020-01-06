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
          <img src="../images/fizzbuzz.png" alt="fizzbuzz" />
          <a class="github-fork-ribbon" href="https://github.com/aliceals/Fizzbuzz-extreme" data-ribbon="View code on GitHub" title="View code on GitHub">View code on GitHub</a>
        </div>
      </div>
    )
  }
}

export default App
