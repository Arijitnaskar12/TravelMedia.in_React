import { createStore,applyMiddleware,combineReducers } from "redux";
import { fetchReducer } from "./reducer/fetchReducer";
import { cardReducer } from "./reducer/cardReducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
            fetched:fetchReducer,
            card:cardReducer
})
 const store=createStore(rootReducer,applyMiddleware(thunk));
 export default store;