import React, { useEffect, useState } from "react";
import "./Login.css";
//import axios from "axios";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [myData, setMyData] = useState();
  const [isLogin, setIsLogin] = useState(false);


 /* const url = "https://myphysio.digitaldarwin.in/api/login/";
  const data = {
    uid: userName,
    password: password,
    blocked: 0,
  };
  const headers = {
    "Content-Type": "text/json",
  };
*/
  // given api not functioning properly so i used dumm API
  const handle = () => {
   /*axios
      .post(url,data,headers)
  .then((res) => setMyData(res.data));*/
    
  
  // custom api
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(setMyData);
    // store the user in localStorage
    localStorage.setItem("userToken", myData?.token);
    localStorage.setItem("userName", myData?.username);
    localStorage.setItem("userEmail", myData?.email);
  };
useEffect(()=>{
  if(localStorage.getItem("userToken")){
    setIsLogin(true)
  }
  
},[handle])
  //acessing data from local storage
  const userEmail = localStorage.getItem("userEmail");
  const userData = localStorage.getItem("userName");

  const clear = () => {
    localStorage.clear()
  };
  


  return (
    <>
    <Navbar userData={userData} clear={clear} />
      <div className="login">
        <h1>PHYSIOAI</h1>
        <h3>Welcome Back!</h3>
        <h5>
          <span>*</span>UserName:
        </h5>
        <input
          type="email"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <h5>
          <span>*</span> Password:
        </h5>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h4>Forgot Password?</h4>
        {isLogin ? (
          <div>
            <button onClick={clear}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => handle()}>Login</button>
          </div>
        )}
      </div>
  
    </>
  );
};
export default Login;




const Navbar = ({userData,clear}) => {
    return (
        <div className='Navbar'>
             <div className='navlink'>
                <li>Home</li>
                <li>About</li>
                <li>contactUs</li>
            </div>
            <div className='form'>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Srch</button>
                
            </div>
           {userData && ( <div className="logout">
           <span>{userData}</span> 
            <button onClick={clear}>Logout</button>
            </div>

           
           )}
           
        </div>
    )
}

