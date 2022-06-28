import * as actions from "../actions/actionTypes";
import axios from 'axios';
import { toast } from 'react-toastify';


const axiosInstance = axios.create({ baseURL: Process.env.REACT_APP_API_URL});


export const signinAction = (email, password) => {
    return async (dispatch) => {
        dispatch({type: actions.USER_SIGNIN_REQUEST});
        try{
            const {data} = await axiosInstance.post('/users/signin', { email: email, password: password });
            dispatch({ type:actions.USER_SIGNIN_SUCCESS, payload: data });
            toast.success('خوش آمدید')
        }
        catch(err){
            console.log('userActions SigninAction error>>>', err)
            dispatch({ type: actions.USER_SIGNIN_FAIL, payload:err.message });
         }

    };
};



export const signupAction = (name, email, password) => {
    return async (dispatch) => {
        dispatch({ type: actions.USER_SIGNUP_REQUEST });
        try {
            const {data} = await axiosInstance.post('/users/signup', { name: name, email: email, password: password });
            dispatch({ type: actions.USER_SIGNUP_SUCCESS, payload: data });
            dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
            //dispatch({ type: actions.USER_SIGNUP_RESET });
        } catch (error) {
         const errorMsg = error.response.data.message ? error.response.data.message : error.message;
         dispatch({ type: actions.USER_SIGNUP_FAIL, payload: errorMsg });
        }
    }
}