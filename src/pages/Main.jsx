import React,{useEffect} from 'react';
import { NewsList } from '../components/NewsList/NewsList';
import { fetchPosts } from '../redux/sagas';


export const MainPage = ()=>{
    
    const url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
    useEffect(()=>{
        fetchPosts(url);
        
    },[])


    return(
        <div>
            Главная страница
             <NewsList />
        </div>
    )
}