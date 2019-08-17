import { persistReducer } from 'redux-persist';

import {
  SET_USERNAME,
  SET_TEACHER_GROUP,
  SET_NOTICE_LIST,
} from '../actions/actionTypes';

import persistConfig from '../persistConfig';

const initialState = {
  userName: null,
  noticeList: [
    {
      title: "Primera Circular",
      description: "Esta es la descripción de la primera circular por parte de los profesores para los padres de familia",
    }
  ],
  teachers: [
    {
      group: null,
      subjects: [
        "Geography"
      ],
      name: "Profesor 1"
    },
    {
      group: null,
      subjects: [
        "Math",
      ],
      name: "Profesor 2"
    },
    {
      group: null,
      subjects: [
        "Science",
        "Geography"
      ],
      name: "Profesor 3"
    },
    {
      group: null,
      subjects: [
        "Math",
        "Geography"
      ],
      name: "Profesor 4"
    },
    {
      group: null,
      subjects: [
        "Math",
        "Science",
      ],
      name: "Profesor 5"
    },
    {
      group: null,
      subjects: [
        "Math",
        "Science",
        "Geography"
      ],
      name: "Profesor 6"
    },
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      console.log("set username")
      return {
        ...state,
        userName: action.payload,
      };
      case SET_TEACHER_GROUP:
        console.log("SET_TEACHER_GROUP REDUCER");
        const { teacherName, group } = action.payload;
        const { teachers } = state;
        let updatedTeachers = [];
        updatedTeachers = updatedTeachers.concat(teachers);
        updatedTeachers.map(teacher => {
          if (teacherName === teacher.name) {
            teacher.group = group;
          }
        })
        return {
          ...state,
          teachers: updatedTeachers,
        };
        case SET_NOTICE_LIST:
        console.log("SET_NOTICE_LIST REDUCER");
        const notice = action.payload;
        const { noticeList } = state;
        noticeList.push(notice);
        return {
          ...state,
          noticeList,
        };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, userReducer);