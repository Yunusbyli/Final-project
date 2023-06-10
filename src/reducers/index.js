import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Əlavə reducer-lar buraya əlavə edilə bilər
});

export default rootReducer;
