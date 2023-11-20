import React, { useState, useEffect } from "react";
import axios from "axios";

const Server = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    try {
        axios.get("http://localhost:5678/post")
        .then((res)=>{
           console.log(res.data);
        }).catch((err)=>{
           console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
  }, [])
  
  const register = () => {
    const user = {
      username: username,
      email: email,
      password: password,
    };
    console.log(user);
    axios.post("http://localhost:5678/post",user)
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

  };
  return (
    <div>
      <div className="w-50 mx-auto">
        <div className="form-group mt-3">
          <label htmlFor="">Username</label>
          <input
            onChange={(e) => setusername(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setemail(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            className="form-control"
            type="password"
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={register}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Server;
