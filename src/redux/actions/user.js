import { createAction } from 'redux-actions';

import {
  SET_USERNAME,
  SET_TEACHER_GROUP,
  SET_NOTICE_LIST,
} from './actionTypes';

export function setUser(userName) {
    console.log("ENTREEEEEEEEE")
  return createAction(SET_USERNAME)( userName );
}

export function setTeacherGroup(group, teacherName) {
  console.log("SET_TEAHCER_GROUP")
return createAction(SET_TEACHER_GROUP)({ group, teacherName });
}

export function setNotice(notice) {
  console.log("SET_NOTICE_LIST")
return createAction(SET_NOTICE_LIST)(notice);
}