import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';

import { CHANGE_PAGE } from '../../redux/action/types';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      color: "#fff"
    },
  },
}));

export default function PaginationRounded({currentPage}) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    
      
    dispatch({type:CHANGE_PAGE,payload:value})
    console.log('актуалка',page)
  };
  return (
    <div className={classes.root}>
      
      <Pagination count={10} onChange={handleChange} color='standard' defaultPage={currentPage}  variant="outlined" shape="rounded" />
    </div>
  );
}