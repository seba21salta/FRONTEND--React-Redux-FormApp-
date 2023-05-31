import { useSelector } from "react-redux";
import Card from'../Card/Card';
import style from './CardContainer.module.css'

const CardContainer = ()=> {

    const users = useSelector((state)=> state.users) 
       
      

    return(
        <div className={style.container}>{users.map((user)=>
            <Card
                key={user?.id}
                id={user?.id} 
                name={user?.name}
                email={user?.email}
                phone = {user?.phone}

            />
        
        )}
        </div>
    )
};

export default CardContainer