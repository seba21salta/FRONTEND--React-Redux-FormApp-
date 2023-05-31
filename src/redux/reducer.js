import { GET_USERS, USER_DETAIL, DELETE_USERS, DELETE_DETAIL } from "./actionTypes";


const initialState = {
    users:[],
    detail: {}
};


const reducer = (state = initialState, action)=> {
       switch (action.type){
          case GET_USERS:
            return {...state, users: action.payload};
            
          case USER_DETAIL:
            return {...state, detail: action.payload} 
            
          case DELETE_USERS:
            return {...state, users: action.payload}

          case DELETE_DETAIL:
            return {...state, detail: action.payload}  



          default:
            return {...state}
       }
};

export default reducer