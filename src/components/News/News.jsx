import React from 'react'
import {Link} from 'react-router-dom';

export const News = () =>{
    return(

        <div style={{border:"1px solid orange"}}>
            <h3>Заголовок</h3>
           <p>рейтинг</p>
           <p>ник автора</p>
           <p>дата публикации</p>
            <Link to="/news" className="btn btn-primary" >перейти </Link>
            </div>
        
    )
}