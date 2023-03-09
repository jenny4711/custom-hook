import React,{ useState,useEffect} from 'react'
import useLocalStorageState from './hooks/useLocalStorageState'

const Counter = () => {
  const [count,setCount]=useLocalStorageState('count',0)
  const addToCount=()=>{
    setCount(count=>count+1)
  }
  return (
    <>
<h3>{count}</h3>
<button onClick={addToCount}>Add</button>
    </>
  )
}

export default Counter