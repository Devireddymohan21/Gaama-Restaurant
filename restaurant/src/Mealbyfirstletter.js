import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div>
          {meal.map((meal)=>(
            <div>
                <p><strong>Meal : </strong>{meal.strMeal}</p>
                <p><strong>category_type : </strong>{meal.strCategory}</p>
                <p><strong>Country : </strong>{meal.strArea}</p>
                <img src={meal.strMealThumb} width='350px' height='350px' alt="Mealitem"/>
                <hr/>
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default Mealbyfirstletter