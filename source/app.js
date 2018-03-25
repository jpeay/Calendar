// importing components
import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import mongoose from 'mongoose'
import BigCalendar from 'react-big-calendar'
BigCalendar.momentLocalizer(moment)

import { getEvents } from './gcal';

require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css')

// creating new react component
class App extends React.Component {
  constructor () {
    super()
    // setting initial state
    this.state = {
      events: []
    }
  }
  // on component load 
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
    const mongoose = require('mongoose');
    mongoose.connect('ds137957.mlab.com:37957/fsjs');
  }
  render () {
    return (
      // react Components
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
      />
    )
  }
}
// render component
render(<App />, document.getElementById('root'))