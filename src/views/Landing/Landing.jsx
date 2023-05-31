import { Link } from "react-router-dom";


const Landing = ()=> {
    return(
        <div style={{background:'green',padding:'10rem', paddingLeft:'25rem'}}>
          <h1>Hola!! soy SEBA ALVAREZ</h1>  
          <h2>Esta es mi app con REACT-REDUX</h2>
          <h2>Formulario a una base de Datos y a la api jsonplaceholder</h2>
          
          <button style={{borderRadius:'99rem', fontSize:'20px', background:'pink'}}>
          <Link to='/home'>TO HOME</Link>
          </button>
        </div>
    )
};


export default Landing;
