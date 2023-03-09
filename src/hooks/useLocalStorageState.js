import React,{useState,useEffect} from 'react'

const useLocalStorageState=(key,defalutValue)=>{
  const [state,setState]=useState(()=>{
    let value=JSON.parse(window.localStorage.getItem(key) || defalutValue)
    return value;
  });
  useEffect(()=>{
    window.localStorage.setItem(key,state)

  },[key,state])
  return [state,setState]
  // const [count,setCount]=useState(()=>{
  //   let value
  //   value=JSON.parse(
  //     window.localStorage.getItem('count')||0)
  //     return value;
  // })

  // useEffect(()=>{
  //   window.localStorage.setItem('count',count);
  // },[count])

}

export default useLocalStorageState