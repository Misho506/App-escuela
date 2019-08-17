import { all, takeLatest } from 'redux-saga/effects';

//actions
import {
    SET_USERNAME,
    SET_TEACHER_GROUP,
    SET_NOTICE_LIST,
} from '../actions/actionTypes';

//sagas
import {
    setUser,
    setTeacherGroup,
    setNotice,
} from './user';

export default function* rootSaga() {
    yield all([
        takeLatest(SET_USERNAME, setUser),
        takeLatest(SET_TEACHER_GROUP, setTeacherGroup),
        takeLatest(SET_NOTICE_LIST, setNotice),
    ]);
}