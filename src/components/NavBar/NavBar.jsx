import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = ()=> {
    return(
        <div className={style.mainContainer }>
            <button style={{fontSize:'20px', backgroundColor:'pink', borderRadius:'1rem'}}>
               <Link to='/home'>TO HOME</Link>
            </button>

            <button style={{fontSize:'20px', backgroundColor:'pink',  borderRadius:'1rem'}}>
               <Link to='create'>TO FORM</Link>
            </button>
        </div>
    )
};


export default NavBar