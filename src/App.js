import axios from "axios";
import { useEffect, useState } from "react";
import Cat from "./Rec/Cat";
import Ingre from "./Rec/Ingre";
import List from "./Rec/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=()=>{
  const [getData,setData]=useState([]);
  const [getName,setName]=useState("");
  const [list,setList]=useState([]);
  const [getId,setId]=useState(0);
  const [getDes,setDes]=useState([])

  useEffect(()=>{
    Intial1()

  },[])

  

  useEffect(()=>{
    
    Intial2()
  },[getName])

  useEffect(()=>{
    
    Intial3()
  },[getId])


  const Intial1=()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res)=>{     
      setData([...res.data.categories])
  }).catch((err)=>{
    console.log(err)})
  }

  const onClickHandler=(name)=>{
    setName(name)
  }

  const Intial2=()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${getName}`).then((res)=>{     
      console.log(res.data.meals)
      setList([...list,...res.data.meals])
  }).catch((err)=>{
    console.log(err)})
  }
  
  

  
  const onClickHandler2=(id)=>{
    setId(id);
  }

  const Intial3=()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getId}`).then((res)=>{     
      
      setDes([res.data.meals])
  }).catch((err)=>{
    console.log(err)})
  }
  

  
  

  return(
    <div>
      Recepie Book
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Cat getData={getData} onClickHandler={onClickHandler}/>}/>
        <Route path="List" element={<List list={list} onClickHandler2={onClickHandler2}/>}/>
        <Route path="Ingre" element={<Ingre getDes={getDes}/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;