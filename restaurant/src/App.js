import React from "react";
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import Menu from "./Menu";
import React from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Menu/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App