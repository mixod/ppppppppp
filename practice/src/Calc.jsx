// import { useState } from "react"

import { useState } from "react"


// function Calc() {
//   const [state,setState]=useState(" alu");

//     const change=()=>{
//       setState("kalu");
//     }
  


//   return (
//     <>
//     <div>{state}</div>
//    <button onClick={change}>click</button>
//    </>
//   )
// }

// export default Calc




function Calc() {
  const [color,setColor]=useState(" ");
  const yellow=()=>{
    setColor("yellow");
  }

  return (
   <>
   <h2>My favourite color is {color}</h2>

   <button onClick={()=>setColor("red")}>RED</button>
   <button onClick={yellow}>Yellow</button>

   
   
   </>
  )
}

export default Calc