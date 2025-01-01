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


  return (
   <>
   <h2>My favourite color is {color}</h2>

   <button onClick={()=>setColor("red")}>RED</button>

   
   
   </>
  )
}

export default Calc