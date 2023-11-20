import React,{useState} from 'react'

const Addtodo = ({add}) => {
    const [onetodo, setonetodo] = useState("")
  return (
    <div>
        <input className='form-control' placeholder='Todo' onChange={(e)=> setonetodo(e.target.value)} type="text" />
        <button onClick={()=>add(onetodo)} className='btn btn-primary'>addTodo</button>
    </div>
  )
}

export default Addtodo