import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import "./Dashboard.css";
function Menu() {
    const [record,setRecord]=useState([]);
    const [loading,setLoading]=useState(false);

    const mainmenu= async () => {
      const response= await axios.get('http://localhost:8005/menu');
      setRecord(response.data.categories);
      setLoading(true);
      for (let v in record){
        console.log(record[v]['idCategory'],record[v]['strCategory']);
        console.log(record[v]['strCategoryDescription']);
      }
    };
    
    console.log(record);

  return (
    <div>
        <h1><strong>Welcome to the Gaama Restaurant</strong></h1>
        <p><small>It is place for Bringing Homestyle Flavors to Your Table!!!</small></p>
        <button onClick={mainmenu}>Menu</button>
        {record && loading && (
          <div>
          <p>Available items are:</p>
        <div className='meal-container'>
          
          {record.map((records) => (
          <div className='meal-card'>
            <p>{records.strCategory}</p>
            <br/>
            <img src={records.strCategoryThumb} width="150px" height="100px" alt="Mealitem" onClick={() => window.open(`/catgy/${records.strCategory}`, '_blank')}  title={records.strCategoryDescription}/>
          </div>
          
        ))}
        </div>
        </div>
        )}
        
    </div>

  )
}

export default Menu