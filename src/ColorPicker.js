import React,{ useState,useEffect} from 'react'
import useLocalStorageState from './hooks/useLocalStorageState'

const ColorPicker = () => {
  const [color,setColor]=useLocalStorageState('color','teal');
  console.log(color)
  
  return (
    <>
<h1 style={{color}}>Your Color is {color}</h1>
    </>
  )
}

export default ColorPicker