import axios from "axios";

export const getAllUsers = (gender,page) => {
    // const queryParam ={
    //     search:param.search??"",
    //     per_page:param.per_page ?? 8,
    //     page: param.page ?? 1
    // }
    // console.log(queryParam);
  const URL = `${process.env.NEXT_PUBLIC_API}?results=8&page=${page}&gender=${gender}`;
    console.log('hehe', URL);
  return axios.get(URL);
}