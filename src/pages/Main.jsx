import React,{useEffect} from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { UpdateButton } from '../components/updateButton/updateButton';
import { fetchPosts } from '../redux/sagas';
import {useDispatch,useSelector} from 'react-redux';
import { getPosts } from '../redux/action';
import { SET_LOADING } from '../redux/action/types';
import { Loader } from '../components/spinner/Loader';



export const MainPage = ()=>{
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)
    useEffect(()=>{
        dispatch({type:SET_LOADING})
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