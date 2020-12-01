import React from 'react';
import  News from '../News';
import './styles.css'

export const NewsList = ({posts}) =>{
    

    


    return(
        posts.map((post)=>{
            const {id} = post;
            return <li key={id}><News post={post}/></li>
        })
        
        
    )
}