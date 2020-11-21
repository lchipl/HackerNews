import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { GET_POST } from '../../redux/action/types';

export const News = (props) =>{  
    const dispatch = useDispatch();
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
            <Link to={`/news/${id}`} onClick={()=>dispatch({type:GET_POST,payload:props.elem})} className="btn btn-primary" >Перейти </Link>
            </div>
        
    )
}
