import React from 'react';
import { News } from '../News/News';

export const NewsList = () =>{
    const mockItems = new Array(15)
    .fill(' ')
    .map((el,index)=>index);

console.log(mockItems)
    return(
        mockItems.map((el,i)=>{
            return <li key={i}><News/></li>
        })
        
        
    )
}