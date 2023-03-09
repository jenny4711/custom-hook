import React from 'react'
import './MoodClicker.css'
import useToggleState from './hooks/useToggleState';
const MoodClicker = () => {
  const[isHappy,toggleIsHappy]=useToggleState(true)
  const[isDarkMode,toggleDarkMode]=useToggleState(false)
  return (
   <div className={isDarkMode? 'dark':'light'} >
    <h1> {isHappy ? '😃': '😪'}</h1>
    <button onClick={toggleIsHappy}>Change Mood</button>
    <button onClick={toggleDarkMode}>Toggle Dark/Light Mood</button>
    </div>
  )
}

export default MoodClicker