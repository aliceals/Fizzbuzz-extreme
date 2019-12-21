import React from 'react'
import FizzBuzz from './FizzBuzz'


class App extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {

    return (
      <div>
        <h1>FizzBuzz</h1>
        <FizzBuzz />
      </div>
    )
  }
}

export default App
