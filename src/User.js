
import React ,{useEffect, useState}from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from './props/Button'

const User = () => {
    // const [users, setusers] = useState([])
    // useEffect(() => {
    //     const userDetail = JSON.parse(localStorage.getItem("userDetail"))
    //     console.log(userDetail);
    //     setusers(userDetail)
    //    }, [])
        const useedit = () =>{
            alert("Hello")
        }
        const usedelete = () =>{
            alert("delete")
        }
        const usesubmit = () =>{
            alert("submit")
        }
  return (
    <div>
       
          <Button color="btn btn-warning"  name="edit" click={useedit}/>
          <Button color="btn  btn-primary" name="delete" click={usedelete}/>
          <Button color="btn btn-success" name="submit" click={usesubmit}/>
         <div className='d-flex justify-content-center align-items-center w-100 p-5'>
            <div className='w-25'>
               
               <div>
               <Link to="/user/profile">Profile</Link> 
               </div>
              <div>
              <Link to="/user/notify">Notification</Link> 
              </div>
              <div>
              <Link to="/user">Home</Link> 
              </div>
              <div>
              <Link to="/user/profile">about</Link> 
              </div>
            </div>
            <div className='w-75'>
               <div>
                 <h1>routes</h1>
                 <Outlet/>
               </div>
            </div>
         </div>
         
    </div>
  )
}

export default User