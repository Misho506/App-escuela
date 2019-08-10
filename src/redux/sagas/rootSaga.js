import { all, takeLatest } from 'redux-saga/effects';
import {
    SET_USERNAME
} from '../actions/actionTypes';
// import {
//     retrieveRides
// } from './rides';

export default function* rootSaga() {
    yield all([
        takeLatest(SET_USERNAME, null),
    ]);
}