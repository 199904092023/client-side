import Login from "./pagesss/pages/login/Login";
import {Routes, Route} from "react-router-dom";
import Singup from "./pagesss/pages/signup/Signup";
import Home from "./pagesss/pages/home/Home";
import RequireUser from "./Components/RequireUser";
import { useRoutes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Routes>
   
      <Route element={<RequireUser/>}></Route>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/Signup" element={<Singup />}/>
    </Routes>
    </div>
  );
}

export default App;
