import React,{useEffect} from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { UpdateButton } from '../components/updateButton/updateButton';
import { fetchPosts } from '../redux/sagas';
import {useDispatch,useSelector} from 'react-redux';
import { getPosts } from '../redux/action';
import { SET_LOADING } from '../redux/action/types';



export const MainPage = ()=>{
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)
    useEffect(()=>{
        dispatch({type:SET_LOADING})
    },[])

    if(loading){
        return(
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
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