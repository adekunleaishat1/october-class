import React ,{useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'

import App from './App'
import './Landing.css'

const Landing = () => {
  const [list, setlist] = useState("")
  const [list1, setlist1] = useState("")
  const [list2, setlist2] = useState("")
  const [allist, setallist] = useState([])
  const [all, setall] = useState(["tola", "bola", "kemi"])
  const [show, setshow] = useState(true)
  const [type, settype] = useState("password")
  const [icon, seticon] = useState("fa fa-eye-slash")
  const [showed, setshowed] = useState(true)
   const route = useParams()
  // const {id} = route.id

  // useEffect(() => {
    
  //   localStorage.setItem("list", JSON.stringify(allist))
    
  // }, [])
// 
//  JSON.parse( localStorage.getItem('list')) 

//  let lists = JSON.parse( localStorage.getItem('list')) 
  
  useEffect(() => {
   let user = JSON.parse(localStorage.getItem("userDetail"))
   console.log(user);
  }, [])
  
  const post = () =>{
    let  value = {
      list,
      list2,
      list1
    }
    console.log(value);
    setallist([...allist, value])
    console.log(allist);
    localStorage.setItem("list", JSON.stringify(allist))
  }
  let islogged = true
  let message = islogged ? 'welcome' : "please log in"
  console.log(message);
  const slash = () =>{
    if (type === "password") {
      settype("text")
      seticon('fa fa-eye')
    }else{
      settype("password")
      seticon('fa fa-eye-slash')
    }
  }
  // {
  //   conditional ? trueexpression : falseexpression
  // }

  // console.log(list);
    const daniel = {
        color: "blue"
    }
    const showing = () =>{
      console.log("sdi");
     showed? setshowed(false) : setshowed(true)
    }
  return (
    <div>

      <h1></h1>
        
        <input onChange={((e)=>setlist(e.target.value))} type='text' />
        <input onChange={((e)=>setlist1(e.target.value))} type={type} /><button onClick={slash}><i className={icon}></i></button>
        <input onChange={((e)=>setlist2(e.target.value))} type='text' />



        <input type={showed? "text" : 'password'}/><button onClick={showing}><i className={showed ? "fa fa-eye" : "fa fa-eye-slash"}></i></button>
        <button onClick={post}>Send</button>
         {
          all.map(e=>(
              <div>
                {e}
              </div>
          ))
         }
         {/* {lists.length == 0? "there is no list available" :
         (
          lists.map((e, i)=>(
            <div key={i}>
              <h1>
                {e.list}
              </h1>
              <h1>
                {e.list1}
              </h1>
              <h1>
                {e.list2}
              </h1>
            </div>
         )
          
          ))
         }
         */}
        
     

    </div>
  )
}

export default Landing