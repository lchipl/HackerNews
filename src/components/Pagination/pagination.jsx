import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';

import { CHANGE_PAGE } from '../../redux/action/types';
const useStyles = makeStyles((theme) => ({
  root: {
   
  },
}));

export default function PaginationRounded() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value)
      
    dispatch({type:CHANGE_PAGE,payload:page})
    console.log('актуалка',page)
  };
  return (
    <div className={classes.root}>
      
      <Pagination count={10} onChange={handleChange} variant="outlined" shape="rounded" />
    </div>
  );
}