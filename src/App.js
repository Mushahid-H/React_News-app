import React, { useState } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  let pageSize = 15

  const { progress, setProgress } = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color='#f11946' progress={progress} height={3} />

        <Routes>
          <Route
            path='/'
            element={
              <News
                setProgress={setProgress}
                key='general'
                pageSize={pageSize}
                country='us'
                category='general'
              />
            }
          ></Route>
          <Route
            path='/business'
            element={
              <News
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
