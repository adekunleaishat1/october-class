import React,{useState} from 'react'
import Addtodo from './Addtodo'
import Distodo from './Distodo'
// import { logDOM } from '@testing-library/react'

const Todo = () => {
   const [alltodo, setalltodo] = useState([])

    const save = (onetodo) =>{
       setalltodo([...alltodo, onetodo])
       console.log(alltodo); 
    }
  return (
    <div>
        <Addtodo add={save}/>
        <Distodo displ={alltodo}/>
    </div>
  )
}

export default Todo