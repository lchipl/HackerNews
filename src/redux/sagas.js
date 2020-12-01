import {put,call,all, takeLatest, select} from 'redux-saga/effects';
import { FETCH_COMMENTS, FETCH_POSTS, GET_COMMENTS, GET_POSTS,HIDE_LOADER,SET_LOADING } from './action/types';
import axios from 'axios';
import {timestamp} from '../utils/timestamp';
 function* sagaFetchPosts(){
  yield takeLatest(FETCH_POSTS,sagaWorkerPosts)
}



function* sagaWorkerPosts(){
    
    try{
      yield put({type:SET_LOADING})  // показать loader 
      const payload = yield call(fetchPosts)
      yield put({type:GET_POSTS,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}

function* sagaFetchComments(){
  yield takeLatest(FETCH_COMMENTS,sagaWorkerComments)
}

function* sagaWorkerComments(){
  try{
    yield put({type:SET_LOADING})  // показать loader 
   const payload = yield call(fetchComments)
    yield put({type:GET_COMMENTS,payload})
    
    yield put({type:HIDE_LOADER})
  }catch(e){
    console.log('ошибОчка', e)
  }
}

export default function* rootSaga() {
  yield all([
    sagaFetchPosts(),
    sagaFetchComments()
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

const {kids} = select((state)=>state.post)

const fetchComments = async()=>{
  let response;
  if(kids){
   response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kids[0]}.json?print=pretty`);
  }else{
    console.log('коммент но пока пусто',)
    return 'комментариев пока нет'
  }
  console.log('коммент',response.data)
return await response.data
}
  
        
        