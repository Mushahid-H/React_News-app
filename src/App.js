import React from 'react'
import News from './components/News'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  let pageSize = 15

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
                pageSize={pageSize}
                country='in'
                category='general'
              />
            }
          ></Route>
          <Route
            path='/business'
            element={
              <News
                key='business'
                pageSize={pageSize}
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
                pageSize={pageSize}
                country='in'
                category='entertainment'
              />
            }
          ></Route>
          <Route
            path='/sports'
            element={
              <News
                key='sports'
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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

// api key: e21242aa87244bf5b4709af2da0ac368
export default App
