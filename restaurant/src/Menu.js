import React from 'react'
import axios from 'axios'
import {useState} from 'react'

function Menu() {
    let v=0;
    const [list,setList]=useState('');
    const mainmenu= async () => {
      const response= await axios.get('http://localhost:8005/menu');
      setList(response.data.categories);
      for (let v in list){
        console.log(list[v]['idCategory'],list[v]['strCategory']);
        console.log(list[v]['strCategoryDescription']);
      }
    };
    
    console.log(list.data);
  return (
    <div>
        menu list
        <p>Available items</p>
        <button onClick={mainmenu}>list</button>
        <div>
          <p><strong>category type: </strong>{list[v].strCategory}</p>
          {/* <p><strong>Description : </strong>{list['strCategoryDescription']}</p> */}
        </div>
    </div>
  )
}

export default Menu