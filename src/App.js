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
        </div>
      </div>
    )
  }
}

export default App
