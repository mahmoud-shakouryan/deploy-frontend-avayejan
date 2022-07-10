import * as actions from './actionTypes';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: "http://37.32.28.60/api"});
export const addToCard = (videoId) => {
    return async (dispatch) => {
        try {
            const result = await axiosInstance.get(`/videos/${videoId}`);
            const video = result.data;
            dispatch({ type: actions.ADD_TO_CARD, payload: video});
        } catch (err) {
            console.log('cardActions addToCard error: ', err);
        }
    }
}


export const removeFromCard = (videoId) => {
    return (dispatch) =>{
        dispatch({ type: actions.REMOVE_FROM_CARD, payload: videoId });
    }
}


export const pay = (price, videoId) =>{
    return async (dispatch, getState) =>{
        const store = getState();
        const userInfo = store.userSigninReducer.userInfo;
        try{
            //const result = await axios.post('/api/pay/', { price: price, videoId: videoId }, { headers: { Authorization: `Bearer ${userInfo.token}`}});
            const result = await axios.post('/api/pay/', { price: price, videoId: videoId, userId: userInfo._id });
        }
        catch(err){
            console.log('pay error>>>', err);
        }
    }
}

export const cardEmpty = () =>{
    return dispatch =>{
        dispatch({ type: actions.CART_EMPTY });
    }
}
