import React from 'react';
import { useSelector } from 'react-redux';
import { News } from '../News/News';
import './styles.css'
export const NewsList = () =>{
    

    const posts = useSelector(state => state.posts)


    return(
        posts.map((el)=>{
            const {id} = el;
            return <li key={id}><News elem={el}/></li>
        })
        
        
    )
}