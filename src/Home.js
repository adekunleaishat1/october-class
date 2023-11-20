import React from 'react'
import {AiFillBackward, AiFillFastBackward} from 'react-icons/ai'
import App from './App'
import Landing from './Landing'
import Button from './props/Button'
import Div from './props/Div'
import Ptag from './props/Ptag'



const Home = () => {
 
  return (
    <>
        <div className='mydiv'>
        
        </div>
        <button className='btn btn-dark'>click</button>
        <img src={require('../src/240_F_650160252_D29NEpUND89480DES3FX662GqCvjRl9S.webp')}/>
        <AiFillBackward/>
        <AiFillFastBackward/>
        <Landing/>
        <div className='w-25 p-5'>
          <Div img={require('./240_F_650160252_D29NEpUND89480DES3FX662GqCvjRl9S.webp')}/>
          <div className='d-flex '>
            <Div imgclass="img-fluid w-50" img={require('./240_F_650160252_D29NEpUND89480DES3FX662GqCvjRl9S.webp')}/>
          <Ptag text="react class"/>
          </div>
        </div>
       
        
    </>
  )
}
<App alluser/>
export default Home