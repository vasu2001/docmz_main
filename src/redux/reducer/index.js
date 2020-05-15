import { combineReducers } from "redux"; 

import AuthReducer from '../reducer/auth'
import DataStoreReducer from '../reducer/dataStore'
import ScheduleReducer from './schedule'
import DoctorReducer from './doctorReducer'
import QuestionReducer from './questionReducer'
import DoctorScheduleReducer from './doctor/scheduleReducer'
import MyDoctorReducer from './doctor/myDoctorReducer'
import PatientAccountReducer from './patientAccountReducer'

const allReducer = combineReducers({
  AuthReducer,
  DataStoreReducer,
  ScheduleReducer,
  DoctorReducer,
  QuestionReducer,
  DoctorScheduleReducer,
  MyDoctorReducer,
  PatientAccountReducer
});

export default allReducer;