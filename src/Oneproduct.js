import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Oneproduct = () => {
    // const [first, setfirst] = useState({})
    
    const product =(JSON.parse(localStorage.getItem("products")))
    console.log(product);
    // useEffect(() => {
    //  setfirst(JSON.parse(localStorage.getItem("products")))
    //  console.log(first);
    // }, [])
    
     const route = useParams()
     const {i} = route
     console.log(i);
  return (
    <div>
        {/* <h1>producy</h1> */}
        <div>
            <h1>{product[i].name}</h1>
            <h1>{product[i].price}</h1>
            <h1>{product[i].size}</h1>
            <h1>{product[i].description}</h1>
        </div>
    </div>
  )
}

export default Oneproduct