import React from 'react';


export const  Comment = ({item}) =>{
    return(
        <div>
        <p>№ </p>
        <p>Автор <strong>{item.by}</strong></p>
        <p>Комментарий {item.text} </p>
        </div>
    )
}