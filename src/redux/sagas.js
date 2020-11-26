import {takeEvery, put,call,all} from 'redux-saga/effects';
import { GET_COMMENTS, GET_POSTS,HIDE_LOADER,SET_LOADING } from './action/types';
import axios from 'axios';
import {timestamp} from '../utils/timestamp';

 function* sagaFetchPosts(){
  yield  takeEvery(GET_POSTS,sagaWorkerPosts)
}



function* sagaWorkerPosts(){
    
    try{
      yield put({type:SET_LOADING}) // показать loader 
      const payload = yield call(fetchPosts)
      yield put({type:GET_POSTS,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}





export default function* rootSaga() {
  yield all([
    sagaFetchPosts()
  ])
};

const initialUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
 const fetchPosts = async(url=initialUrl) =>{
    const response = await axios.get(url);
      const sum = response.data
      const arrPosts = sum.slice(400,501)
        console.log(arrPosts)
       const result = await Promise.all( arrPosts.map( async(postIndex)=>{
        console.log(postIndex)
        const response =  await axios.get(
               `https://hacker-news.firebaseio.com/v0/item/${postIndex}.json?print=pretty`);

         
         return  {...response.data,time:timestamp(response.data.time)}
      }))
      console.log(result);
      
      return result;
      
        
}


  
  
        
        