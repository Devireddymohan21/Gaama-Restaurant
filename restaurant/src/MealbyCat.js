import React , { useState , useEffect }from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css";

function MealbyCat() {
  const [meals,setMeals]=useState([]);
  const [loading, setLoading]=useState(false);
  const {category}=useParams();

  const handlefetchmeals = async () => {
    const response = await axios.get(`http://localhost:8005/catgy?category=${category}`);
      setLoading(true);
      console.log(response.data.meals);
      for (let v in response.data.meals){
        console.log(response.data.meals[v]['strMeal'], response.data.meals[v]['idMeal']);
      }
      return response.data.meals
  };

  useEffect(()=>{
    const fetchmealsbycatgy = async () => {
      if(category){
        const res = await handlefetchmeals();
        setMeals(res);
        console.log(res);
      }
      else{
        setLoading(false);
      }
    }
    fetchmealsbycatgy();
    },[category]);

  console.log(category);
  console.log(meals);

  return (
    <div >
      <div className='form-grp'>
      <br/>
        <p>In {category} category Available Items are:</p>
        <br/>
        {meals && loading && (
          <div className="meal-container">
          {meals.map((meal) => (
            <div className='meal-card'>
            <p> {meal.strMeal}</p>
            <br/>
            <img src={meal.strMealThumb} width='200px' height='150px' alt="Mealitem"/>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MealbyCat