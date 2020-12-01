import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { GET_POST } from '../../redux/action/types';

import Button from '@material-ui/core/Button';
import './news.css'

export const NewsItem = ({post}) =>{  
    const dispatch = useDispatch();
              const {by,
                time,
                title,
                score,
                id
            }  =post; 
                        
 return(

        <article className="article">
            <h3>{title}</h3>
           <p>рейтинг: {score}</p>
           <p>ник автора: {by}</p>
           <p>Опубликовано: {time}</p>
           <Link to={`/news/${id}`}  onClick={()=>dispatch({type:GET_POST,payload:post})} >
           <Button variant="contained" color="primary">
               
                   Перейти
                   
            </Button>
            </Link>
         </article>
        
    )
}
