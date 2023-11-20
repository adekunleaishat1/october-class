import React,{useState,useEffect} from 'react'
 import { useNavigate } from 'react-router-dom'

const Useparam = () => {
     
     
     const navigate = useNavigate()
    let i = 0
    const [product, setproduct] = useState([
        {
            id : 1,
            name: "fish",
            description:"panla fish",
            size: "1kg",
            price: 2000,
        }, {
            id : 2,
            name: "meat",
            description:"red meat",
            size: "1kg",
            price: 4000,
        }, {
            id : 3,
            name: "pork",
            description:"pigmeat",
            size: "1kg",
            price: 2000,
        }, {
            id :4,
            name: "rice",
            description:"foreignrice",
            size: "1kg",
            price: 10000,
        }, {
            id : 5,
            name: "beans",
            description:"yellowbeans",
            size: "1kg",
            price: 5000,
        },
    ])
    useEffect(() => {
       localStorage.setItem("products", JSON.stringify(product))
    }, [])
    

    const more = (i) =>{
     console.log(i);
      navigate(`/one/${i}`)
    }
  return (
    <div>
        <div>
    
            {
                product.map((el, i)=>(  
                    <div key={i}>
                       <h1>{el.name}</h1>
                       <p>{el.price}</p>
                       <button onClick={(e)=>more(i)}>See more</button>
                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default Useparam