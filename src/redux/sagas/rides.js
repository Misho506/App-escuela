// import { put, call } from 'redux-saga/effects';
// import axios from 'axios';

// import {
//   GET_RIDES_SUCCESS,
//   GET_RIDES_FAIL,
// } from '../actions/actionTypes';


// function fetchRidesData() {
//   return axios.get(
//     `${process.env.REACT_APP_API_URL}ride`,
//   );
// }

// // eslint-disable-next-line import/prefer-default-export
// export function* retrieveRides() {
//   const page = 0;
//   try {
//     const response = yield call(fetchRidesData, page);

//     if (response.data) {
//       const rides = {
//         ...response.data,
//       };
//       yield put({ type: GET_RIDES_SUCCESS, payload: rides });
//     }
//   } catch (e) {
//     yield put({ type: GET_RIDES_FAIL, payload: e });
//   }
// }
