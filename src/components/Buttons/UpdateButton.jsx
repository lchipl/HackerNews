import React from 'react';
import {useDispatch} from 'react-redux';
import { GET_POSTS } from '../../redux/action/types';

export const UpdateButton = () =>{
    const dispatch =  useDispatch()

    const updatePosts =()=>{
        dispatch({type:GET_POSTS})
    }

    return(
    <div >
        <button onClick={updatePosts}  className="btn btn-primary">Обновить</button>
    </div>
        
    )
}