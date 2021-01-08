import React from 'react';
import Button from '@material-ui/core/Button';

export const UpdateButton = ({updatePosts}) =>{
    

    return(
    <div >
        <Button 
                className="updBtn"
                variant="contained" 
                color="primary" 
                onClick={updatePosts}>
                    Обновить
        </Button>
    </div>
        
    )
}