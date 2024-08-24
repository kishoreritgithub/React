import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    useEffect(()=>{
        console.log('useEffect working');
        
    },[count2])
    
  return (
 <>
    <h2>count1:{count1}</h2>
    <button onClick={()=>{setCount1((count1)=>count1+1)}}>count1 increment</button>
    <h1>count2:{count2}</h1>
    <button onClick={()=>{setCount2((count2)=>count2+1)}}>count2 increment</button>
 </>
  )
}

export default UseEffect