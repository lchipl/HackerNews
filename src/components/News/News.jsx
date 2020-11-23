import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { GET_POST } from '../../redux/action/types';

export const News = ({post}) =>{  
    const dispatch = useDispatch();
              const {by,
                time,
                title,
                score,
                url,
                id
            }  =post; 
                        
 return(

        <article style={{border:"1px solid orange",height:'auto',background:'#E4E4DE'}}>
            <h3>{title}</h3>
           <p>рейтинг: {score}</p>
           <p>ник автора: {by}</p>
        
            <Link to={`/news/${id}`} style={{background:'#FE5D00'}} onClick={()=>dispatch({type:GET_POST,payload:post})} className="btn btn-primary" >Перейти </Link>
            </article>
        
    )
}
