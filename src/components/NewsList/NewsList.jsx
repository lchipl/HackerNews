import React from 'react';
import { useSelector } from 'react-redux';
import { News } from '../News/News';
import './styles.css'
export const NewsList = () =>{
    

    const posts = useSelector(state => state.posts)


    return(
        posts.map((post)=>{
            const {id} = post;
            return <li key={id}><News post={post}/></li>
        })
        
        
    )
}