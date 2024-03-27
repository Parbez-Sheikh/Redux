import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import About from './Pages/About'
import { decrement, increment, incrementByAmount,} from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement=()=>{
  dispatch(increment())
  }
  const handleDecrement=()=>{
    dispatch(decrement())
    }

    const handleAmount=()=>{
     
      dispatch(incrementByAmount(parseInt(value)))
    
      }

      const[value,setValue]=useState(0)

      console.log(value)



      const handleValue=(e)=>{

        setValue(e.target.value)

      }

   


  return (
 

   <div className='w-[60%] mx-auto mt-10  bg-lime-400'>
   <h2 className='text-3xl text-4xl text-center mb-10 text-black'>{count}</h2>
  {/* <About></About> */}

  <button onClick={handleIncrement} className='bg-red-400 mx-3 rounded-xl p-2  my-3 text-2xl '>Increment</button>
  <button onClick={handleDecrement} className='bg-red-400 mx-3 rounded-xl p-2 my-3 text-2xl'>Decrement</button>
  <input type="text" onChange={handleValue} className='p-2 ' />
  <button onClick={handleAmount} className='bg-red-400 mx-3 rounded-xl p-2 my-3 text-2xl'>Add amount payload</button>

   </div>
 
  
  )
}

export default App
