import { createAction } from 'redux-actions';

import {
  SET_USERNAME,
} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export default function setUser(userName) {
    console.log("ENTREEEEEEEEE")
  return createAction(SET_USERNAME)({ userName });
}