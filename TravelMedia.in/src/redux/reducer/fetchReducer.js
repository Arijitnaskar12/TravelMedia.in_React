import { FETCH_START,FETCH_SUCCESS,FETCH_ERROR } from "../actions/actionTypes";

let initialValue={
    loading:false,
    data:[],
    error:null
}

export const fetchReducer=(state=initialValue,action)=>{
        switch(action.type)
        {
            case FETCH_START:return ({...state,loading:true});
            case FETCH_SUCCESS:return ({...state,loading:false,data:action.data,error:null});
            case FETCH_ERROR:return ({...state,loading:false,data:"",error:action.error});
            default:return state;   
        }
}