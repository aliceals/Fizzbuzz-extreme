import React from 'react'
import FizzBuzz from './FizzBuzz'
import Controls from './Controls'


class App extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {

    return (
      <div>
        <h1>FizzBuzz</h1>
        <FizzBuzz />
        <Controls />
      </div>
    )
  }
}

export default App
