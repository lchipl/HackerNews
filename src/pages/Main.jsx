import React,{useEffect} from 'react';
import  NewsList  from '../components/NewsList';
import  {UpdateButton}  from '../components/Buttons/UpdateButton';
import {useDispatch,useSelector} from 'react-redux';
import  Loader from '../components/spinner';
import { FETCH_POSTS } from '../redux/action/types';



export const MainPage = ()=>{
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)
    useEffect(()=>{
        dispatch({type:FETCH_POSTS})
    },[])

    if(loading){
        return(
            <Loader />
        )
    }
    return(
        <div>
            <UpdateButton  className="btn btn-primary" />
            Главная страница
             <NewsList />
        </div>
    )
}