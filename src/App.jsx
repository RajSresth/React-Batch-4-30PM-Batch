import React,{useState} from 'react'
import "./App.css"
import { useEffect } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const [cart,setCart]=useState(0)

    // componentDidMount
    // useEffect(()=>{
    //   console.log("componentDidMount")
    // },[])


  // component Did Update
  // useEffect(()=>{
  //     alert("Your Item is Added to cart")
  // },[cart])

  // component will unmount
  useEffect(()=>{

    return ()=>{
      console.log("Component will unmount")
    }
  })
  

  const handleIncrement=()=>{
    setCount(()=>count+1)
    
  }
  const handleDecrement=()=>{
    if(count>0){
      setCount(()=>count-1)
    
    }
  }    
  
  const handleCart=()=>{
    setCart(()=>cart+1)
  }

  return (
    <div >
        <h1 className='text-center mb-5'>Count: {count}</h1>
        <button onClick={handleIncrement} className='py-1 px-4 bg-cyan-400 mx-3 rounded-md'>Increment</button>
        <button onClick={handleDecrement} className='py-1 px-4 bg-purple-400 rounded-md'>Decrement</button>

        <div className='flex flex-col items-center my-5'>
              <h1>Cart: {cart}</h1>
              <button onClick={handleCart} className='py-1 px-4 bg-purple-400 rounded-md'>Add to Cart</button>
        </div> 
    </div>
  )
}

export default App