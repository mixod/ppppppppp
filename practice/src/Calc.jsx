// import { useState } from "react"

// import { useState } from "react"



// // function Calc() {
// //   const [state,setState]=useState(" alu");

// //     const change=()=>{
// //       setState("kalu");
// //     }
  


// //   return (
// //     <>
// //     <div>{state}</div>
// //    <button onClick={change}>click</button>
// //    </>
// //   )
// // }

// // export default Calc




// // function Calc() {
// //   const [color,setColor]=useState(" ");
// //   const yellow=()=>{
// //     setColor("yellow");
// //   }

// //   return (
// //    <>
// //    <h2>My favourite color is {color}</h2>

// //    <button onClick={()=>setColor("red")}>RED</button>
// //    <button onClick={yellow}>Yellow</button>

   
   
// //    </>
// //   )
// // }

// // export default Calc








// function Calc() {

//   const [state, setState]=useState(" ");
//   const [value1, setValue1]=useState(" ");
//   const [value2, setValue2]=useState(" ");

// const add=()=>{
//    const result=value1+value2;
//    setState(result);
// }

// const firstnum=(e)=>{
//   const a=parseInt(e.target.value);
//   setValue1(a);
// }

// const secondnum=(e)=>{
//   const b=parseInt(e.target.value);
//   setValue2(b);
// }

//   return (
//     <>
//   <input type="number" onChange={firstnum}></input>
//   <input type="number"onChange={secondnum}></input>
//   <button onClick={add}>ADD</button>
//   <div>Rsult{state}</div>

//     </>
//   )
// }

// export default Calc




import { useState } from "react"

function Calc() {
  const initstae="thid is home page"

  const [state,setState]=useState(initstae);


  const changePage=()=>{
    setState("this is another page");
  }
  const reset=()=>{
    setState(initstae);
  }
  return (
    <>
    <div>{state}</div>
    <button onClick={changePage}>click for net page</button>
    {state === "this is another page" &&(
      <button onClick={reset}>click</button>
    )
    }
    
    </>
  )
}

export default Calc