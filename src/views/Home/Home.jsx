import {Link} from 'react-router-dom';
import CardContainer from '../../components/CardContainer/CardContainer';
import { useEffect } from "react";
import { getUsers, deleteUsers } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import style from './Home.module.css'

const Home = ()=> {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers());
        return ()=>{dispatch(deleteUsers())}
    },[])




    return(
        <div className={style.Hom}>
            <h1 style={{paddingLeft:'25rem', paddingTop:'1rem', color:'white'}}>HOME</h1>
            <div><CardContainer/></div> 
           
        </div>
    )
};


export default Home ;