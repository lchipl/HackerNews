import React from 'react';
import { useSelector } from 'react-redux';
import { UpdateComments } from '../components/Buttons/UpdateComments';

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

        const timestamp = (timeUnix) =>{
            let dateUnix = new Date(timeUnix*1000);
           let correctTime = dateUnix.getDate() + '/' + (dateUnix.getMonth()) + '/' + dateUnix.getFullYear() + " " + dateUnix.getHours() + ':' + dateUnix.getMinutes();
            return correctTime;
        }
        console.log('время элемента', time)
        console.log('время элемента',timestamp())
    return(
        <div>
            <UpdateComments />
            <h3>{title}</h3>
            <p>рейтинг: {score}</p>
            <p>ник автора: {by}</p>
            <p>Время {timestamp(time)}</p>
            <p>Комментариев: </p>
            <a href={`${url}`} className="btn btn-primary">Перейти к источнику</a>
        </div>
    )
}