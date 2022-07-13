import * as actions from "../actions/actionTypes";


const dlListInState = { videoIdsArr: [], loading: true, error: false };

export const dlListReducer = (state = dlListInState, action)=>{
    switch(action.type){
        case actions.DLLIST_REQUEST:
            return { ...state, loading: true, error: false };
        case actions.DLLIST_SUCCESS:
            return { ...state, videoIdsArr: action.payload, loading: false, error: false };
        case actions.DLLIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
         return state;
    }
}