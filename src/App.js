import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={
                <News
                  key='general'
                  pageSize={15}
                  country='us'
                  category='general'
                />
              }
            ></Route>
            <Route
              path='/business'
              element={
                <News
                  key='business'
                  pageSize={15}
                  country='us'
                  category='business'
                />
              }
            ></Route>
            <Route
              path='/entertainment'
              element={
                <News
                  key='entertainment'
                  pageSize={15}
                  country='us'
                  category='entertainment'
                />
              }
            ></Route>
            <Route
              path='/sports'
              element={
                <News
                  key='sports'
                  pageSize={15}
                  country='us'
                  category='sports'
                />
              }
            ></Route>
            <Route
              path='/science'
              element={
                <News
                  key='science'
                  pageSize={15}
                  country='us'
                  category='science'
                />
              }
            ></Route>
            <Route
              path='/health'
              element={
                <News
                  key='health'
                  pageSize={15}
                  country='us'
                  category='health'
                />
              }
            ></Route>
            <Route
              path='/technology'
              element={
                <News
                  key='technology'
                  pageSize={15}
                  country='us'
                  category='technology'
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

// api key: e21242aa87244bf5b4709af2da0ac368
