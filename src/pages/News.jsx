import React from 'react';
import { useSelector } from 'react-redux';

export const NewsPage = ()=>{
    const post = useSelector((state)=>state.post);
    const  {by,
            time,
            title,
            score,
            url,
            id
            }  =post; 

            //показать что-нибудь такое
        //     const showWorning = () =>{
        //         url = '/'
        //         alert('жаль, но пост больше недоступен, нажмите на Перейти, чтобы вернуться к списку');
                
        //     }
        //    if(url == 'undefined')showWorning():null
    return(
        <div>
            <h2>Название новости</h2>
            <p>Рейтинг</p>
            <p>Автор</p>
            <a href={`${url}`} className="btn btn-primary">Перейти</a>
        </div>
    )
}