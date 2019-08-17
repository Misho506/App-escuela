import { put, call } from 'redux-saga/effects';
// import axios from 'axios';

// import {
//   GET_RIDES_SUCCESS,
//   GET_RIDES_FAIL,
// } from '../actions/actionTypes';

function postNotice() {
  console.log("HTTP REQUEST")
}

function postUser() {
    console.log("HTTP REQUEST")
}

function postTeacherGroup() {
  console.log("HTTP REQUEST")
//   return axios.get(
//     `${process.env.REACT_APP_API_URL}ride`,
//   );
}


export function* setUser() {
    return yield call(postUser);
  // try {
    // const response = yield call(postUser);
  //   if (response.data) {
  //       console.log("DONE!!")
  //   //   yield put({ type: GET_RIDES_SUCCESS, payload: rides });
  //   }
  // } catch (e) {
  //   console.log("ERROR")
  //   // yield put({ type: GET_RIDES_FAIL, payload: e });
  // }
}

export function* setTeacherGroup() {
  return yield call(postTeacherGroup);
};

export function* setNotice() {
  return yield call(postNotice);
};
