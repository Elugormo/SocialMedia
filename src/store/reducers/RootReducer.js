import authReducer from "./authReducer";
import projectReducer from "./projectRecuder";
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
const RootReducer = combineReducers({
    auth: authReducer, 
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default RootReducer