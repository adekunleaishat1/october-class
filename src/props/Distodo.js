import React from 'react'

const Distodo = ({displ}) => {
    console.log(displ);
  return (
    <div> 
        {
            displ.map(e=>(
              <h1>{e}</h1>  
            ))
        }
        
    </div>
  )
}

export default Distodo