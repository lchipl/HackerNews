import React from 'react'
import {Link} from 'react-router-dom';

export const News = () =>{
    return(

        <div style={{border:"1px solid orange"}}>
            
            Новость
            <Link to="/news" className="btn btn-primary" >перейти </Link>
            </div>
        
    )
}