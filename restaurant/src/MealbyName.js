import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Dashboard.css";
function MealbyName() {
    const [meal,setMeal]=useState([]);
    const [loading,setLoading]=useState(false);
    const [item,setItem]=useState('');
    const fetchmeal = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
        console.log(response.data.meals);
        setMeal(response.data.meals);
        setLoading(true);
    }
    console.log(meal);
    
  return (
    <div>
      <div>
        <h2>Browse the meals by its name</h2>
      <input 
        type='text'
        className="searchbar"
        placeholder='Enter the meal'
        onChange={e => setItem(e.target.value)}/>
        <button type="submit" class="btn btn-default" onClick={fetchmeal}>
        <img src="https://www.kindpng.com/picc/m/6-65193_magnifying-glass-search-search-bar-to-find-icon.png" width="20px" height="10px" onClick={fetchmeal} alt="search-icon"/></button>
      </div>
        
        {meal && loading && (
        <div>
          {meal.map((meal)=>(
            <div>
                <p><strong>Meal : </strong>{meal.strMeal}</p>
                <p><strong>category_type : </strong>{meal.strCategory}</p>
                <p><strong>Country : </strong>{meal.strArea}</p>
                <img src={meal.strMealThumb} width='350px' height='350px' alt="Mealitem"/>
            </div>
          ))}
        </div>
        )}
        <footer>
          <h2>Browse By Initial Letter</h2>
          <div>
          <a href={`/letter/${'a'}`} target='_blank'>A</a>
          <> / </>
          <a href={`/letter/${'b'}`} target='_blank'>B</a>
          <> / </>
          <a href={`/letter/${'c'}`} target='_blank'>C</a>
          <> / </>
          <a href={`/letter/${'d'}`} target='_blank'>D</a>
          <> / </>
          <a href={`/letter/${'e'}`} target='_blank'>E</a>
          <> / </>
          <a href={`/letter/${'f'}`} target='_blank'>F</a>
          <> / </>
          <a href={`/letter/${'g'}`} target='_blank'>G</a>
          <> / </>
          <a href={`/letter/${'h'}`} target='_blank'>H</a>
          <> / </>
          <a href={`/letter/${'i'}`} target='_blank'>I</a>
          <> / </>
          <a href={`/letter/${'j'}`} target='_blank'>J</a>
          <> / </>
          <a href={`/letter/${'k'}`} target='_blank'>K</a>
          <> / </>
          <a href={`/letter/${'l'}`} target='_blank'>L</a>
          <> / </>
          <a href={`/letter/${'m'}`} target='_blank'>M</a>
          <> / </>
          <a href={`/letter/${'n'}`} target='_blank'>N</a>
          <> / </>
          <a href={`/letter/${'o'}`} target='_blank'>O</a>
          <> / </>
          <a href={`/letter/${'p'}`} target='_blank'>P</a>
          <> / </>
          <a href={`/letter/${'q'}`} target='_blank'>Q</a>
          <> / </>
          <a href={`/letter/${'r'}`} target='_blank'>R</a>
          <> / </>
          <a href={`/letter/${'s'}`} target='_blank'>S</a>
          <> / </>
          <a href={`/letter/${'t'}`} target='_blank'>T</a>
          <> / </>
          <a href={`/letter/${'u'}`} target='_blank'>U</a>
          <> / </>
          <a href={`/letter/${'v'}`} target='_blank'>V</a>
          <> / </>
          <a href={`/letter/${'w'}`} target='_blank'>W</a>
          <> / </>
          <a href={`/letter/${'x'}`} target='_blank'>X</a>
          <> / </>
          <a href={`/letter/${'y'}`} target='_blank'>Y</a>
          <> / </>
          <a href={`/letter/${'z'}`} target='_blank'>Z</a>

          </div>
        </footer>
    </div>
  )
}

export default MealbyName