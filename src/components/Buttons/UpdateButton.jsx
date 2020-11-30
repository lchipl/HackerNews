import React from 'react';

export const UpdateButton = ({updatePosts}) =>{
    

    return(
    <div >
        <button onClick={updatePosts}  className="btn btn-primary">Обновить</button>
    </div>
        
    )
}