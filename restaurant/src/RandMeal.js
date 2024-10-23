import React, { useState } from 'react';
import axios from 'axios';

function RandMeal() {
    const [meal, setMeal] = useState([]);
    const mainmenu= async () => {
        const response= await axios.get('http://localhost:8005/rand');
        setMeal(response.data.meals['0']);
        console.log(meal);
    }
  return (
    <div>
        <p><strong>Click on the randomone to get random dish on ur Table</strong></p>
        <button onClick={mainmenu}>RandomOne</button>
        <div>
          <p><strong>Meal : </strong>{meal.strMeal}</p>
          <p><strong>category_type : </strong>{meal.strCategory}</p>
          <img src={meal.strMealThumb} width='300px' height='250px'/>
          <p><strong>Country : </strong>{meal.strArea}</p>
        </div>
      </div>
  )
}


export default RandMeal