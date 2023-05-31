import { useState } from "react";
import axios from 'axios';



const Form = ()=> {
    
    const [form, setForm] = useState({
       name:'', email:'', phone:''
    });


    const [errors, setErrors] = useState({
        name: '', email:'', phone:''
    })




const changeHandler = (event)=> {
    setForm({...form, [event.target.name]: event.target.value});

    validate({[event.target.name]: event.target.value});
}



const validate = (form)=> {
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(form.email)){
          setErrors({...errors, email: 'email VALIDO'})
    }else{
          setErrors({...errors, email: 'email invalido'})
    }
    if(form.email === ''){
        setErrors({...errors, email:'email vacio'})
    }

}

const submitHandler = (event)=> {
     event.preventDefault();
     axios.post("http://localhost:3001/users", form)
       .then (res=> alert(res))
       .catch (err=> alert(err))

}

   
    return(
        <form onSubmit={submitHandler} style={{background:'rgb(15,111,231)', paddingLeft:'25px' }}>
            
            <h1>  FORM </h1> 

           <p>
             <label> NAME :</label>
             <input type="text" name="name" value={form.name} onChange={changeHandler} />
           </p> 

           <p>
             <label> EMAIL:</label>
             <input type="text" name='email' value={form.email} onChange={changeHandler} />
             {errors.email && <span> {errors.email} </span> } 
           </p> 

           <p>
             <label> PHONE:</label>
             <input type="text" name='phone' value={form.phone} onChange={changeHandler} />
           </p> 

            <button style={{background:'rgb(232, 304, 124)', fontSize:'20px'}} >
                SUBMIT
            </button>

             
        </form>
    )
};


export default Form;