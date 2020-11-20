import {takeEvery, put,call} from 'redux-saga/effects';
import { GET_POSTS } from './action/types';
import axios from 'axios'


export function* sagaWatcher(){
  yield  takeEvery(GET_POSTS,sagaWorker)
}


function* sagaWorker(){
    
    try{
      //yield put() // показать loader 
      const payload = yield call(fetchPosts)
      yield put({type:GET_POSTS,payload})
      // скрыть loader
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}


//
export const fetchPosts = async(url) =>{
    const response = await axios.get(url);
      const sum = response.data
        let lastEl = sum[0]
        let firstEl = sum[sum.length-1]
       
        lastEl= await axios.get( `https://hacker-news.firebaseio.com/v0/item/${lastEl}.json?print=pretty`);
        firstEl= await axios.get( `https://hacker-news.firebaseio.com/v0/item/${firstEl}.json?print=pretty`);
        console.log(`объекты 
        firstEl: ${new Date(firstEl.data.time*1000)}
        lastEl: ${new Date(lastEl.data.time*1000)}
        
        `)
}