import axios from 'axios';
import * as actions from './actionTypes';

const axiosInstance = axios.create({ baseURL: "https://www.avayejan.ir/api"});


export const videoList = () => {
    return async dispatch =>{
        dispatch({ type: actions.VIDEO_LIST_REQUEST});
        try {
            const {data} = await axiosInstance.get('/videos');
            dispatch({ type: actions.VIDEO_LIST_SUCCESS, payload: data});
        } catch (err) {
            console.log('videoAcions videoList error', err.message)
            dispatch({ type: actions.VIDEO_LIST_FAIL, payload: err.message });
        }
    }
}



export const videoDetails = (id) => {
    return async dispatch => {
        dispatch({ type: actions.VIDEO_DETAILS_REQUEST});
        
        axiosInstance.get(`/videos/${id}`).then(result=>{
            
            if(!result.data){
               return dispatch({type: actions.VIDEO_DETAILS_FAIL});
            }
            dispatch({ type: actions.VIDEO_DETAILS_SUCCESS, payload:result.data});
        })
        .catch(err=>{              //error'e marboot be axios
            console.log('videoAcions videoDetails error', err.message)
            dispatch({ type: actions.VIDEO_DETAILS_FAIL, payload: err.message })
        })
       
    }
}