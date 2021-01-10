import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateComments } from '../components/Buttons/UpdateComments';
import { Comments } from '../components/Comments/Comments';
import { FETCH_COMMENTS } from '../redux/action/types';


import Button from '@material-ui/core/Button';

export const NewsPage = () =>{
    
   
    const state = useSelector((state)=>state);
    
    const  {
        by,
        time,
        title,
        score,
        url,
        id,
        kids
        }  =state.post; 


   
    
    const {comments} =state;
    console.log('это они', comments)
    const dispatch = useDispatch()

    useEffect(()=>{
    
        dispatch({type:FETCH_COMMENTS,kids})
    },[])
            //показать что-нибудь такое
        //     const showWorning = () =>{
        //         url = '/'
        //         alert('жаль, но пост больше недоступен, нажмите на Перейти, чтобы вернуться к списку');
                
        //     }
        //    if(url == 'undefined')showWorning():null
    const CommentsList = () =>{
        if(comments){
            return(<Comments items={comments}/>)
        }
    }
       
        console.log('время элемента', time)
    return(
        <div>
            <UpdateComments />
                <h3>{title}</h3>
                <p>рейтинг: {score}</p>
                <p>ник автора: {by}</p>
                <p>Время {(time)}</p>
                <p>Комментариев: {kids?kids.length:0}</p>
            <a href={`${url}`} >
                <Button variant="contained" 
                        color="primary" >
                    Перейти к источнику
                </Button>
            </a>
            {CommentsList}
        </div>
    )
}