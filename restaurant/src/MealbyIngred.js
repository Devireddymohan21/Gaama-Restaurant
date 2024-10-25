import React from 'react';
import { useState ,useEffect } from 'react';
import axios from 'axios';

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
        {/* <footer>
            <div>
                <h2>Browse by countries</h2>
                <img src="https://countryflagsapi.netlify.app/flag/pt.svg" width="50px" height="30px" onClick={setSelectedarea('Portuguese')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ru.svg" width="50px" height="30px" onClick={setSelectedarea('Russian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/tr.svg" width="50px" height="30px" onClick={setSelectedarea('Turkish')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ua.svg" width="50px" height="30px" onClick={setSelectedarea('Ukrainian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/vn.svg" width="50px" height="30px" onClick={setSelectedarea('Vietnamese')}/>
                <img src="https://countryflagsapi.netlify.app/flag/tn.svg" width="50px" height="30px" onClick={setSelectedarea('Tunisian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/es.svg" width="50px" height="30px" onClick={setSelectedarea('Spanish')}/>
                <img src="https://countryflagsapi.netlify.app/flag/pl.svg" width="50px" height="30px" onClick={setSelectedarea('Polish')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ma.svg" width="50px" height="30px" onClick={setSelectedarea('Moroccan')}/>
                <img src="https://countryflagsapi.netlify.app/flag/mx.svg" width="50px" height="30px" onClick={setSelectedarea('Mexican')}/>
                <img src="https://countryflagsapi.netlify.app/flag/my.svg" width="50px" height="30px" onClick={setSelectedarea('Malaysian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ke.svg" width="50px" height="30px" onClick={setSelectedarea('Kenyan')}/>
                <img src="https://countryflagsapi.netlify.app/flag/jp.svg" width="50px" height="30px" onClick={setSelectedarea('Japanese')}/>
                <img src="https://countryflagsapi.netlify.app/flag/jm.svg" width="50px" height="30px" onClick={setSelectedarea('Jamaican')}/>
                <img src="https://countryflagsapi.netlify.app/flag/it.svg" width="50px" height="30px" onClick={setSelectedarea('Italian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ie.svg" width="50px" height="30px" onClick={setSelectedarea('Irish')}/>
                <img src="https://countryflagsapi.netlify.app/flag/in.svg" width="50px" height="30px" onClick={setSelectedarea('Indian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/gr.svg" width="50px" height="30px" onClick={setSelectedarea('Greek')}/>
                <img src="https://countryflagsapi.netlify.app/flag/fr.svg" width="50px" height="30px" onClick={setSelectedarea('French')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ph.svg" width="50px" height="30px" onClick={setSelectedarea('Filipino')}/>
                <img src="https://countryflagsapi.netlify.app/flag/eg.svg" width="50px" height="30px" onClick={setSelectedarea('Egyptian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/nl.svg" width="50px" height="30px" onClick={setSelectedarea('Dutch')}/>
                <img src="https://countryflagsapi.netlify.app/flag/hr.svg" width="50px" height="30px" onClick={setSelectedarea('Croatian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/cn.svg" width="50px" height="30px" onClick={setSelectedarea('Chinese')}/>
                <img src="https://countryflagsapi.netlify.app/flag/ca.svg" width="50px" height="30px" onClick={setSelectedarea('Canadian')}/>
                <img src="https://countryflagsapi.netlify.app/flag/gb.svg" width="50px" height="30px" onClick={setSelectedarea('British')}/>
                <img src="https://countryflagsapi.netlify.app/flag/us.svg" width="50px" height="30px" onClick={setSelectedarea('American')}/>
                

            </div>
        </footer> */}
    </div>
  )
}

export default MealbyIngred