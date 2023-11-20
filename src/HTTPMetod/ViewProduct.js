import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
const ViewProduct = () => {
    const route = useParams()
    const {id} = route
    console.log(id);
   const [Oneproduct, setOneproduct] = useState({})
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`) 
        .then(res => res.json())
        .then(data => {
            setOneproduct(data)
            console.log(Oneproduct);
        })
    }, [])
     
  return (
    <div>
        <div>
            <img src={Oneproduct.thumbnail} alt="" />
            <h1>{Oneproduct.title}</h1>
            <h1>{Oneproduct.description}</h1>
            <h1>{Oneproduct.brand}</h1>
        </div>
        <div className='circle'>
           {/* <div className='inercircle1'></div> 
           <div className='inercircle2'></div> 
           <div className='inercircle3'></div>  */}
        </div>
    </div>
  )
}

export default ViewProduct