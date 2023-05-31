import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userDetail, deleteDetail} from "../../redux/actions";
import style from './Detail.module.css'


const Detail = ()=> {

    const {id} = useParams();
   
    const dispatch = useDispatch();

    useEffect(()=> {
         dispatch(userDetail(id));
         return ()=>{ dispatch(deleteDetail())}
    },[]);


    const user = useSelector((state)=>state.detail)


    return(
        <div className={style.detail}>
          <p> DETAIL</p>
          <p>Name :{user?.name}</p>
          <p>Phone :{user?.phone}</p>
          <p>Email :{user?.email}</p>
        </div>
    )
};


export default Detail;