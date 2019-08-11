import { statement } from "@babel/template";

const initState = {
        authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('Error')
        return {
            ...state,
            authError: 'Login Failed'
        }
        case 'LOGIN_SUCCESS':
        console.log('Logged in')
        return {
            ...state,
            authError: null
        }
        case 'SIGNOUT_SUCCESS':
        console.log('SignOut Success')
        return state;
        case 'SIGNUP_SUCCESS':
        console.log('Signup Success')
        return {
            ...state,
            authError: null
        }
        case 'SIGNUP_ERROR':
        console.log('Signup Error') 
        return {
            ...state,
            authError: action.err.message
        }
        default:
        return state;
    }
}

export default authReducer