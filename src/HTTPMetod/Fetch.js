import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Fetch = () => {
    const [product, setproduct] = useState([])
    const  navigate = useNavigate()

    useEffect(() => {
       fetch('https://dummyjson.com/products') 
       .then(res => res.json())
       .then(data => {
          console.log(data.products);
        setproduct(data.products)
        console.log(product);
       })
      
    }, [])
     const more = (id) =>{
        console.log(id);
        navigate(`/view/${id}`)
     }
    
  return (
    <div>
         <div className='container'>
              {product  && 
              product.map((e, i)=>(
                <>
                  <div className='card p-5 w-25' key={i}>
                      <img src={e.thumbnail} alt="" />
                      <h1>{e.title}</h1>
                      <h1>{e.brand}</h1>
                      <button onClick={()=>more(e.id)}>See more</button>
                   </div>
                </>
              ))

              }
         </div>

    </div>
  )
}

export default Fetch