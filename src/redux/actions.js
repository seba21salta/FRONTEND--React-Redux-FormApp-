import { GET_USERS, USER_DETAIL, DELETE_DETAIL, DELETE_USERS } from "./actionTypes";
import axios from 'axios';




export const getUsers = ()=> {
    return async function  (dispatch){
      const apiData = await axios.get('/users');
       dispatch({type:GET_USERS, payload:apiData.data})
       

    }
  
}


export const userDetail = (id)=> {
    return async function  (dispatch) {
        const apiDataDetail = await axios.get (`/users/${id}`);
        dispatch({type:USER_DETAIL, payload: apiDataDetail.data});
       
    }
};


export const deleteUsers = ()=> {
    return {type:DELETE_USERS, payload: []}
};



export const deleteDetail = ()=> {
    return {type:DELETE_DETAIL, payload: {}}
};