import React, { useState } from "react";
import './Login.css'
import axios from "axios";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [myData, setMyData] = useState();

  const url = "https://myphysio.digitaldarwin.in/api/login/";
 const  data= {
    uid: userName,
    password: password,
    blocked:0,
  }
  const body= {
    "Content-Type": "text/json",
  }
  const handle = () => {
    axios
      .post(url,data,body)
      .then((res) => setMyData(res.data));
  };

  const clear = () => {
    localStorage.clear(userName, "userName");
    localStorage.clear(password, "password");
  };
  console.log("kkkkk", myData);

  return (
    <div className="login">
        <h1>PHYSIOAI</h1>
        <h3>Welcome Back!</h3>
      <h5><span>*</span>UserName:</h5>
      <input
        type="email"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <h5><span>*</span> Password:</h5>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
         <h4>Forgot Password?</h4>

      <div>
        <button onClick={()=>handle()}>Login</button>
      </div>
      <div>
        <button onClick={clear()}>Logout</button>
      </div>
    </div>
  );
};
export default Login;
