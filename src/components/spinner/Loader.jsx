import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    spinner: {
      '& > *': {
        marginTop:"30%"
      },
    },
  }));
export const Loader = () =>{
    
  const classes = useStyles();
    return(
        <div className={classes.spinner}>
        <div ><CircularProgress  color="secondary" size={210} /></div>
        </div>
    )
}