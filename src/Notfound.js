import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const go = () =>{
      navigate("/")
    }
  return (
    <div>
        <h1>You are on the wrong page</h1>
        <button onClick={go} className='btn btn-danger'>Go back Home</button>
    </div>
  )
}

export default Notfound