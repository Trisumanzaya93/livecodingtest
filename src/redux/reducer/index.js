import { combineReducers } from "redux";
import getAllProfileReducer from "./getProfileReducer";


const reducers = combineReducers({
    getAllProfile:getAllProfileReducer
});

export default reducers;