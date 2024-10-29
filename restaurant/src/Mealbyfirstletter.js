import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css"

function Mealbyfirstletter() {
    const [meal,setMeal]=useState([]);
    const [loading,setLoading]=useState(false);
    const {initial}=useParams();
    const fetchmeal = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${initial}`);
        console.log(response.data.meals);
        setLoading(true);
        return response.data.meals
    }

    useEffect(()=>{
        const handlefetchmeals = async () =>{
            const response =await fetchmeal();
            setMeal(response);
        }
        handlefetchmeals();
    },[initial])

    console.log(meal);

  return (
    <div>
        {meal && loading && (
        <div className="meal-container">
          {meal.map((meal)=>(
            <div className="meal-card">
                <p>{meal.strMeal}</p>
                <img src={meal.strMealThumb} width='250px' height='250px' alt="Mealitem"/>
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default Mealbyfirstletter