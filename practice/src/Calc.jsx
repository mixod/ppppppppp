import { useState } from "react"


function Calc() {
  const [state,setState]=useState(" alu");

    const change=()=>{
      setState("kalu");
    }
  


  return (
    <>
    <div>{state}</div>
   <button onClick={change}>click</button>
   </>
  )
}

export default Calc
