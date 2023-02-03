import axios from "axios";
import { useState,useEffect } from "react";
import './Cat.css'
import { NavLink, useNavigate } from "react-router-dom";

const List=(props)=>{
    // const [getList,setList]=useState();
    
    // useEffect(()=>{
    //     Intial()
    // },[])

    // const Intial=()=>{
    //     axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((res)=>{
            
    //         console.log(res.data.meals)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    return(
        <div className="styleCard">
            {
                props.list.map((obj,idx)=>{
                    return(
                        <div className="card " style={{width:'18rem'}} key={idx}>
                        <img src={obj.strMealThumb} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{obj.strMeal}</h5>
                          <NavLink><button onClick={()=>props.onClickHandler2(obj.idMeal)}>View details</button></NavLink>
                        </div>
                      </div>
                    )
                })
            }
        </div>
    )
}

export default List;