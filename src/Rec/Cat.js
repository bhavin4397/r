import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState,useEffect} from 'react';
import axios from 'axios';
import './Cat.css'
import { NavLink } from 'react-router-dom';

const Cat=(props)=>{
    



    return(
        
            <div className="styleCard">
        {
            props.getData.map((obj,idx)=>{
                return(
                    
                      <div className="card " style={{width:'18rem'}} key={idx}>
                        <img src={obj.strCategoryThumb} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{obj.strCategory}</h5>
                          <NavLink to="List"><button onClick={()=>props.onClickHandler(obj.strCategory)}>View details</button></NavLink>
                        </div>
                      </div>
                    
                    
                )
            })
        }
        </div>
        
        
    )
}

export default Cat;