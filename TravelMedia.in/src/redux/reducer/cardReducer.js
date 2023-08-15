import {SELECTED_CARD} from '../actions/actionTypes';
 let initialvalue="";

 export const cardReducer=(state=initialvalue,action)=>{
    switch(action.type){
        case SELECTED_CARD:return action.data;
        default:return state;
    }
 }