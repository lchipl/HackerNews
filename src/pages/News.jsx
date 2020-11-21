import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export const NewsPage = ()=>{
    const post = useSelector((state)=>state.post);
    const  {by,
            time,
            title,
            score,
            url,
            id
            }  =post; 
    return(
        <article>
            <h2>Название новости</h2>
            <p>Рейтинг</p>
            <p>Автор</p>
            <a href={`${url}`} className="btn btn-primary">Читать</a>
        </article>
    )
}