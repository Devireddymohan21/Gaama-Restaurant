import React , { useState , useEffect }from 'react'
import axios from 'axios';

function MealbyCat() {
  const [categories, setCategories]=useState([]);
  const [selectedcatgy,setSelectedcatgy]=useState('');
  const [meals,setMeals]=useState([]);
  const [loading, setLoading]=useState(false);
  
  const fetchcategories= async ()=>{
      const response = await axios.get(`http://localhost:8005/catlist`);
      return response.data.meals;
  };

  const handlefetchmeals = async () => {
    const response = await axios.get(`http://localhost:8005/catgy?category=${selectedcatgy}`);
      setLoading(true);
      console.log(response.data.meals);
      for (let v in response.data.meals){
        console.log(response.data.meals[v]['strMeal'], response.data.meals[v]['idMeal']);
      }
      return response.data.meals
  }
  const fetchmealsbycatgy = async () => {
    if(selectedcatgy){
      const res = await handlefetchmeals();
      setMeals(res);
      console.log(res);
      console.log('mealghnn',meals);
    }
    else{
      setLoading(false);
    }
  };

  useEffect(()=>{
    const categorieslist = async () => {
        const response = await fetchcategories();
        for (let v in response){
          console.log(response[v]['strCategory']);
        }
        setCategories(response);
    };
    categorieslist();
  },[])
  console.log('mealghnn',meals);

  return (
    <div>
      <div className='form-grp'>
      <select
        id='categorieslist'
        className='categorieslist'
        value={selectedcatgy}
        onChange={e => setSelectedcatgy(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
        ))}
        </select>

        <button className="btn btn-primary" onClick={fetchmealsbycatgy} >
                Fetch Meals
        </button>

        {meals && loading && (
          <div className="Meals-List">
          {meals.map((meal) => (
            <div className='meals-card'>
            <p> {meal.strMeal}</p>
            <img src={meal.strMealThumb} width='350px' height='350px' alt="Mealitem"/>
            <hr/>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MealbyCat