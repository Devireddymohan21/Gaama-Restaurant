import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from "./Menu";
import RandMeal from "./RandMeal";
import MealbyCat from "./MealbyCat";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/rand' element={<RandMeal/>}/>
          <Route path='/catgy' element={<MealbyCat/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App