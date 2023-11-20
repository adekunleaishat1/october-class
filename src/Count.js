import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament } from './Redux/Counter'
// import counterSlice from './Redux/Counter'

const Count = () => {
    const dispath = useDispatch()
    const count = useSelector((state) => state.counter.value)
    // console.log(count);
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>dispath(increament())}>add</button>
    </div>
  )
}

export default Count