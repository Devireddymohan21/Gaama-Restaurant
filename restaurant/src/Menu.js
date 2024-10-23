import React from 'react'
import axios from 'axios'
import {useState} from 'react'

function Menu() {
    const [record,setRecord]=useState([]);
    const mainmenu= async () => {
      const response= await axios.get('http://localhost:8005/menu');
      setRecord(response.data.categories);
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
        <div>
          <p>Available items are:</p>
          {record.map((records) => (
          <div>
            <p><strong>category ID: </strong>{records.idCategory}</p>
            <p><strong>category type: </strong>{records.strCategory}</p>
            <img src={records.strCategoryThumb}/>
            <p><strong>Description: </strong>{records.strCategoryDescription}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Menu