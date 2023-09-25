import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}

// api key: e21242aa87244bf5b4709af2da0ac368
