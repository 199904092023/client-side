import React, { useState } from 'react';
import'./Signup.scss';
import { axiosClient } from '../../../utils/axiosClient';
 


function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail]= useState("");
    const[password, setPassword] = useState("");

   async function handleSUbmit(e) {
        e.preventDeafult();
        try {
          const result = await axiosClient.post("/auth/singup", {
            email,
            password
        });
        console.log(result);
      
    }
    catch (error) {
        console.log(error);
    }
    }
    return (
        <div className="signup">
        <div className="signup-box"> 
        <h2 className="heading">Signup</h2>
        <form onSubmit={handleSUbmit}>

        <label htmlfor="name">Name</label>
            <input type="text" className="email" id="name" onChange={(e) => setName(e.target.value)}/>

            <label htmlfor="email"> Email</label>
            <input type="email" className="="email id="email"
            onChange={(e) => setEmail(e.target.value)}/>  

            <label htmlfor="password"> password</label>
            <input type="password" className="password" id="password"
            onChange={(e) => setPassword(e.target.value)}/> 
             <input type="submit" className="submit" />
   </form>
          
            <p className="subheading">Already have a acouunt Log in <link to="/singup">Sign Up</link></p>
          
            </div>
            </div>
           
    );
}
export default Signup;