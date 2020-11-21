import React from 'react'
import {Link} from 'react-router-dom';

export const News = (props) =>{  
              const {by,
                time,
                title,
                score,
                url,
                id
            }  =props.elem;             
 return(

        <div style={{border:"1px solid orange"}}>
            <h3>{title}</h3>
           <p>рейтинг: {score}</p>
           <p>ник автора: {by}</p>
           {/* <p>дата: {new Date(time *1000)}</p> */}
            <Link to={`/news+${id}`}className="btn btn-primary" >перейти </Link>
            </div>
        
    )
}
