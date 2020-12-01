import React from 'react';
import  NewsItem from '../NewsItem';
import './styles.css'

export const NewsList = ({posts}) =>{
    

    


    return(
        posts.map((post)=>{
            const {id} = post;
            return <li key={id}><NewsItem post={post}/></li>
        })
        
        
    )
}