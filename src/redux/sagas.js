import {takeEvery, put,call} from 'redux-saga/effects';
import { GET_POSTS,HIDE_LOADER,SET_LOADING } from './action/types';
import axios from 'axios'
import { getPosts } from './action';


export function* sagaWatcher(){
  yield  takeEvery(SET_LOADING,sagaWorker)
}


function* sagaWorker(){
    
    try{
      //yield put() // показать loader 
      const payload = yield call(fetchPosts)
      yield put({type:GET_POSTS,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}


const initialUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
export const fetchPosts = async(url=initialUrl) =>{
    const response = await axios.get(url);
      const sum = response.data
      const arrPosts = sum.slice(400,501)
        console.log(arrPosts)
       const result = await Promise.all( arrPosts.map( async(postIndex)=>{
        console.log(postIndex)
        const res =  await axios.get(
               `https://hacker-news.firebaseio.com/v0/item/${postIndex}.json?print=pretty`);
        return res.data
      }))
      console.log(result);
      
      return result;
      
        
}

  
  
        
        