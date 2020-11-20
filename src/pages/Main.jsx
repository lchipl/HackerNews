import React,{useEffect} from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { updateButton } from '../components/updateButton/updateButton';
import { getPosts } from '../redux/action';
import { fetchPosts } from '../redux/sagas';


export const MainPage = ()=>{
    
    
    useEffect(()=>{
        fetchPosts()
        
    },[])


    return(
        <div>
            <updateButton className="btn btn-primary" />
            Главная страница
             <NewsList />
        </div>
    )
}