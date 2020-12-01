import React from 'react';
import {Comment} from './Comment'

export const Comments = ({items}) =>{

    console.log('элементы',items)

    return(
        <div className="main-container">
        <ul >
           {items.map((item)=> <li key={item.id}> <Comment item={item}/></li>)}
        </ul>
        </div>
    
    )}