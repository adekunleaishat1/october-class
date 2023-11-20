import React from 'react'

const Button = (props) => {
    console.log(props);
  return (
    <div>
        <button className={props.color} onClick={props.click}>{props.name}</button>
    </div>
  )
}

export default Button