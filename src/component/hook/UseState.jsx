import React, { useState } from 'react'

const UseState = () => {
  const[num,setNum]=useState(0)
    function handleClick(){
        console.log("click event");
        
      setNum((num)=>num+1)
        console.log(num);
        
    }
    function removeClick(){
        console.log("click event");

      setNum((num)=>num-1)
        console.log(num);
         
        
    }
  return (
    <div>
<h1>count:{num}</h1>
<button onClick={handleClick}>click</button>
<button onClick={removeClick}>remove</button>
    </div>

  )
}

export default UseState
 