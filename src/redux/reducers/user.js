import { persistReducer } from 'redux-persist';

import {
  SET_USERNAME
} from '../actions/actionTypes';

import persistConfig from '../persistConfig';

const initialState = {
  userName: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, userReducer);