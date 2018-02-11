//const who = 'world';
//console.log(`Hello ${who}`);
//

import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      who: "React"
    }
  }
  render () {
    return (
      <div>
        <p>Hello world!</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
