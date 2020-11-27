import React from 'react';
import {useDispatch} from 'react-redux';
import { FETCH_POSTS } from '../../redux/action/types';

export const UpdateButton = () =>{
    const dispatch =  useDispatch()

    const updatePosts =()=>{
        dispatch({type:FETCH_POSTS})
    }

    return(
    <div >
        <button onClick={updatePosts}  className="btn btn-primary">Обновить</button>
    </div>
        
    )
}