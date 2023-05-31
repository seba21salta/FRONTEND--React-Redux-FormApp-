import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail/Detail";
import { useLocation } from "react-router-dom";

import axios from 'axios';
//axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'back-react-redux-serverdb-form-production.up.railway.app'


function App() {
 const location = useLocation()
   
  return (
    
    <div className="App">
    
    
     {location.pathname !== '/' && <NavBar/>}
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/create" element={<Form/>} />
      <Route path="/detail/:id" element={<Detail/>} />
        
    </Routes>   

    </div>
  );
}

export default App;
