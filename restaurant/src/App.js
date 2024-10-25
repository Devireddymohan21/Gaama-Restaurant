import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from "./Menu";
import RandMeal from "./RandMeal";
import MealbyCat from "./MealbyCat";
import MealbyArea from "./MealbyArea";
import MealbyIngred from "./MealbyIngred";
import MealbyName from "./MealbyName";
import Mealbyfirstletter from "./Mealbyfirstletter";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/rand' element={<RandMeal/>}/>
          <Route path='/catgy' element={<MealbyCat/>}/>
          <Route path="/area" element={<MealbyArea/>}/>     
          <Route path="/ingred" element={<MealbyIngred/>}/>   
          <Route path="/name" element={<MealbyName/>}/>
          <Route path="/letter/:initial" element={<Mealbyfirstletter/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App