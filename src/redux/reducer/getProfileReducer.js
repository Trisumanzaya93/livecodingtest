import { ACTION_STRING } from "../actions/actionString";
const initialState = {
    allProfile: [],
    totalPage:0,
    loading: false,
  };
  
  const getAllProfileReducer = (state = initialState, action) => {
      
  const { getProfile  } = ACTION_STRING;
    switch (action.type) {
      case getProfile:
          console.log("Reducer",action.payload);
        return {
          ...state,
          allProfile: action.payload.data,
          totalPage:action.payload.totalPage,
          loading: false,
        };
      default:
        return state;
    }
  };
  export default getAllProfileReducer;