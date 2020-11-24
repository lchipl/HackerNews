import React from 'react';
import { useSelector } from 'react-redux';
import { UpdateComments } from '../components/Buttons/UpdateComments';
import { Comments } from '../components/Comments/Comments';

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

       
        console.log('время элемента', time)
    return(
        <div>
            <UpdateComments />
            <h3>{title}</h3>
            <p>рейтинг: {score}</p>
            <p>ник автора: {by}</p>
            <p>Время {(time)}</p>
            <p>Комментариев: </p>
            <a href={`${url}`} className="btn btn-primary">Перейти к источнику</a>
            <Comments />
        </div>
    )
}