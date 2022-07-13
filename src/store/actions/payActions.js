import * as actions from "../actions/actionTypes";
import axios from 'axios';
import { toast } from 'react-toastify';



export const pay = (price, videoId) =>{
    return async (dispatch, getState) =>{
        dispatch({type: actions.PAY_REQUEST});
        const store = getState();
        const userInfo = store.userSigninReducer.userInfo;
        try{
            console.log('umad tuye payAction bad az loading')
            const result = await axios.post('https://www.avayejan.ir/api/pay', { price: price, videoId: videoId }, { headers: { Authorization: `Bearer ${userInfo.token}`}});
            console.log('payActions result from pay request', result);
            dispatch({ type: actions.PAY_SUCCESS, payload: result.data.link });
        }
        catch(err){
            console.log('pay error>>>', err);
            dispatch({ type: actions.PAY_FAIL, payload: err.message });

        }
    }
}