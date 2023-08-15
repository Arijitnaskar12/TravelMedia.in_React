import { SELECTED_CARD } from "./actionTypes";

export const selectedCard=(card)=>{
    return{
        type:SELECTED_CARD,
        data:card
    }
}