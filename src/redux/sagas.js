import {takeEvery, put,call} from 'redux-saga/effects';
import { GET_POSTS } from './action/types';
import axios from 'axios'


export function* sagaWatcher(){
  yield  takeEvery(GET_POSTS,sagaWorker)
}


function* sagaWorker(){
    yield put() //loader 
    yield call(fetchPosts)
}


//
const fetchPosts = async() =>{
    const res = await axios.get();

}