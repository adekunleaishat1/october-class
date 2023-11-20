import React ,{useState,useEffect}from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")
  const [users, setusers] = useState([])
  const [count, setcount] = useState(0)
  const [calculations, setcalculations] = useState(0)
   const navigate = useNavigate()

  useEffect(() => {
    setcalculations(count * 2)
  }, [count])
  

  const save = () =>{
    console.log(email);
    let user = {
      username,
      email,
      password,
    }
    setusers([...users, user])
    localStorage.setItem("userDetail",JSON.stringify(users))
    navigate("/user")
    // setcount(count + 1)
   
  }
  return (
   <>
    <h1 className='react'>welcome to react class {Math.random()}</h1>
    <input onChange={(e) =>setusername(e.target.value)} type='text'/>
    <input onChange={(e) =>setemail(e.target.value)} type='text'/>
    <input onChange={(e) =>setpassword(e.target.value)} type='text'/>
    <button onClick={save}>Register</button>
     {/* <p>i clicked on the button {count} times</p>
     <p>{calculations}</p> */}
   </>  
  )
}

export default App