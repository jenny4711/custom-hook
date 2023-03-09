import React,{useState} from 'react';
const useToggleState =(initState=true)=>{
  const [state,setState]=useState(initState);
  const toggleState =()=>{
    setState(state =>!state )
  }
  return [state,toggleState]
}

export default useToggleState


// Making piece of state - starts as true or false
// Making a function to toggle state from t/f or f/t

// const MoodClicker = () => {
//   const [isHappy,setisHappy]=useState(true);
//   const [isDarkMode,setIsDarkMood]=useState(true);
//   const toggleMood =()=>{
//     setisHappy(mood=>!mood)
//   }

//   const toggleDarkMode=()=>{
//     setIsDarkMood(mood=>!mood)
//   }