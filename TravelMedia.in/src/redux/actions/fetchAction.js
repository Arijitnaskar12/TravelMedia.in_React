import { FETCH_START,FETCH_SUCCESS,FETCH_ERROR } from "./actionTypes";

export const fetchStart=()=>{
    return{
        type:FETCH_START
    }
}
export const fetchSuccess=(data)=>{
    return {
        type:FETCH_SUCCESS,
        data:data
    }
}
export const fetchError=(error)=>{
    return {
        type:FETCH_ERROR,
        error:error
    }
}


export function handleFetching(){
   return function(dispatch){
    dispatch(fetchStart());
    try{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=> res.json())
        .then((data)=>dispatch(fetchSuccess(data)))
        .catch((error)=>dispatch(fetchError(error)))
    }catch(error)
    {
        console.log(error);
    }
    
   }
}