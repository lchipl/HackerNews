import React from 'react';
import {Link} from 'react-router-dom';

export const NewsPage = ()=>{
    return(
        <article>
            <h2>Название новости</h2>
            <p>Рейтинг</p>
            <p>Автор</p>
            <Link to={`./news`} className="btn btn-primary">Открыть</Link>
        </article>
    )
}