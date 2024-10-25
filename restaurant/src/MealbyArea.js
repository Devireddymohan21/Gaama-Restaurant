import { useState, useEffect} from "react";
import React  from "react";
import axios from "axios";

function MealbyArea() {
    const [meals,setMeals]=useState([]);
    const [area,setArea]=useState([]);
    const [selectedarea,setSelectedarea]=useState('');
    const [loading, setLoading]=useState(false);

    const fetchmeals = async () => {
        console.log(selectedarea);
        const response = await axios.get(`http://localhost:8005/aremeal?area=${selectedarea}`);
        for (let v in response.data.meals){
            console.log(response.data.meals[v]['strMeal']);
          }
        return response
    }

    const meallist = async () => {
        if(selectedarea){
            const response = await fetchmeals();
            setMeals(response.data.meals);
            console.log(meals);
            setLoading(true);
        }
        else{
            setLoading(false);
        }
        
    }

    const fetchareas = async () =>{
        const response = await axios.get('http://localhost:8005/arealist');
        console.log(response.data.meals);
        return response.data.meals   
    }

    useEffect(()=>{
        const arealist = async () => {
            const response = await fetchareas();
            for(let v in response){
                console.log(response[v].strArea);
            }
            setArea(response);
        }
        arealist();
    },[]) 

  return (
    <div>
        <div>
        <select 
        id='arealist' 
        className="listofareas"
        value={selectedarea} 
        onChange={e => setSelectedarea(e.target.value)}
        >
            <option value="">Select an area</option>
            {area.map((areya)=>(
                <option key={areya.strArea} value={areya.strArea} >{areya.strArea}</option>
            ))}
        </select>
        <button onClick={meallist}>Fetch Meals</button>
        {meals && loading && (
        <div className="forg-manie">
            {meals.map((meal) => (
                <div>
                    <p><strong>Meal : </strong>{meal.strMeal}</p>
                    <img src={meal.strMealThumb} width="350px" height="350px" alt="Mealitem"/>
                    <hr/>
                </div>
            ))}
        </div>
        )}
        </div>
    </div>
  )
}

export default MealbyArea