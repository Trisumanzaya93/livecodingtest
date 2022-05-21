import { getAllUsers } from "../../utils/user";
import { ACTION_STRING } from "./actionString";

export const getAllUsersAction = (gender,page) => {
    return async (dispatch)=>{
        try {
            const result = await getAllUsers(gender,page)
            console.log(result.data.data);
            const payload= {
                data:result.data.results??[],
                totalPage:result.data.total_page
            }
            console.log(result);
            dispatch({type:ACTION_STRING.getProfile,payload:payload})
        } catch (error) {
            console.log("action",error);
        }

    }
  };