import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import "./styles.css"

export const Loader = () =>{
    return(
        <CircularProgress color="secondary" className="spinner" />
    )
}