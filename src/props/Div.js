import React from 'react'

const Div = ({img, imgclass}) => {
  return (
    <div>
            <div>
              <img className={imgclass}  src={img} alt="" />
              
            </div>
    </div>
  )
}

export default Div