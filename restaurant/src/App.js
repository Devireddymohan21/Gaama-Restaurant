import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from "./Menu";
import RandMeal from "./RandMeal";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/rand' element={<RandMeal/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App