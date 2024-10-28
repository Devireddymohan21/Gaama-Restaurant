import React from 'react';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import "./Dashboard.css";

function MealbyIngred() {
    const [items,setItems]=useState([]);
    const [selecteditem,setSelecteditem]=useState('');
    const [ingredlist,setIngredlist]=useState([]);
    const [loading, setLoading]=useState(false);

    const fetchmeals = async () => {
        console.log(selecteditem);
        const response = await axios.get(`http://localhost:8005/ingredmeal?ingredient=${selecteditem}`);
        for (let v in response.data.meals){
            console.log(response.data.meals[v]['strMeal']);
          }
        return response
    }

    const meallist = async () => {
        if(selecteditem){
            const response = await fetchmeals();
            setItems(response.data.meals);
            console.log(items);
            setLoading(true);
        }
        else{
            setLoading(false);
        }
        
    }

    const fetchingredients = async () =>{
        const response = await axios.get('http://localhost:8005/ingredlist');
        console.log(response.data.meals);
        return response.data.meals   
    }

    useEffect(()=>{
        const ingredientlist = async () => {
            const response = await fetchingredients();
            for(let v in response){
                console.log(response[v].strIngredient);
            }
            setIngredlist(response);
        }
        ingredientlist();
    },[]) 

  return (
    <div>
        <div>
        <select 
        id='arealist' 
        className="listofareas"
        value={selecteditem} 
        onChange={e => setSelecteditem(e.target.value)}
        >
            <option value="">Select an ingredient</option>
            {ingredlist.map((ingredist)=>(
                <option key={ingredist.strIngredient} value={ingredist.strIngredient} >{ingredist.strIngredient}</option>
            ))}
        </select>

        <button onClick={meallist}>Fetch Meals</button>
        {items && loading && (
        <div className="forg-manie">
            {items.map((item) => (
                <div>
                    <p><strong>Meal : </strong>{item.strMeal}</p>
                    <img src={item.strMealThumb} width="350px" height="350px" alt="Mealitem"/>
                    <hr/>
                </div>
            ))}
        </div>
        )}
        </div>
    </div>
  )
}

export default MealbyIngred