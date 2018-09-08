import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_DATA} from '../actions/types';
import { getData as getDataApi } from '../api/data';
import { storeData } from '../actions';

export const getData = function* () {
  try {
    const data = yield call(getDataApi);
    yield put(storeData(data));
  }
  catch(error){
    //HANDLE ERROR HERE
    console.log('GET DATA api call failed');
  }
};

export default function* dataSaga() {
  yield takeEvery(GET_DATA, getData);
}
