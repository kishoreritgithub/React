import React, { useReducer } from 'react'

const UseReducer = () => {

function reducer(state,action){

if(action.type==="increment")
    {return{age:state.age+1}}
else if(action.type ==="decrement")
    {return{age:state.age-1}}

}

const[state,dispatch]=useReducer(reducer,{age:20})

  return (
    <div>
        <h1>my age is{state.age}</h1>
        <button onClick={()=>{dispatch({type:"increment"})}}>increment</button> 
        <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>
    </div>
  )
}


export default UseReducer