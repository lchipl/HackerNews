import React,{ useEffect} from 'react';
import NewsList  from '../components/NewsList';
import {UpdateButton}  from '../components/Buttons/UpdateButton';
import {useDispatch,useSelector} from 'react-redux';
import Loader from '../components/spinner';
import { FETCH_POSTS } from '../redux/action/types';
import PaginationRounded from '../components/Pagination/pagination';



export const MainPage = () =>{

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const loading = state.loading;
    const posts = state.posts

    const updatePosts = () =>{
        dispatch({type:FETCH_POSTS})
    }

    useEffect(()=>{
        dispatch({type:FETCH_POSTS})
    },[])

    
const IsLoading =()=>{
    if(loading){
        return <Loader />
        }
    else{
       return( 
    <>
        <UpdateButton  updatePosts={updatePosts} className="btn btn-primary" />
       <NewsList  posts={posts}/>
       <PaginationRounded currentPage={state.currentPage}/>
    </>
       )
    }
}
    return(
        <div >
             <div className="newsWrapper">
                 
            
            
             <IsLoading />
             </div>
             
        </div>
    )
}