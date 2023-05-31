import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props)=> {
    const {name, phone, email,id} = props
    return(
        <div className={style.card}> 
            
           
         <Link to={`/detail/${id}`}>
            <p style={{fontSize:'2rem'}}>{name}</p>
         </Link>
 
              
           <p> Email: {email}</p>
           <p>Phone: {phone} </p>
           

        
        </div>
    )
};

export default Card