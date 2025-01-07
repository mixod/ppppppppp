// import { useState } from "react"

import { useState } from "react"

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




// import { useState } from "react"

// function Calc() {
//   const initstae="thid is home page"

//   const [state,setState]=useState(initstae);


//   const changePage=()=>{
//     setState("this is another page");
//   }
//   const reset=()=>{
//     setState(initstae);
//   }
//   return (
//     <>
//     <div>{state}</div>
//     <button onClick={changePage}>click for net page</button>
//     {state === "this is another page" &&(
//       <button onClick={reset}>click</button>
//     )
//     }
    
//     </>
//   )
// }

//  export default Calc

// import { useState } from "react";
// import './App.css'

// function Card() {
//     const initialState={
//         Fathername:"Ram Hari Thapa",
//         Mothername:"Kopila Thapa",
//         Sonname:"Anish Thapa"
//       };
//     const [state,setState]=useState(initialState);

//     const changeState={
//         Fathername:"Shyam Thapa",
//         Mothername:"Radika Thapa",
//         Daughtername:"Pranisha Thapa"
//       };
//     const change=()=>{

//         setState(changeState)
//     }

//     const reset=()=>{
//         setState(initialState)
//     }
//   return (
//     <>
//     <div>
//        <spam> Father's Name:{state.Fathername}</spam><br/>
//        <spam> Mother's Name:{state.Mothername}</spam><br/>
//         {state.Sonname && <spam>Son's Name:{state.Sonname}</spam>}
//         {state.Daughtername && <spam> Daughter's name:{state.Daughtername}</spam>}
//     </div>
//     <div>
//     <button onClick={change}>NEXT INFORMATION</button>
//     <button onClick={reset}>RESET</button>
//     </div>
//     </>
//   )
// }

// export default Card


// function Calc() {
//   const [color,setColor]=useState();
//   const green=()=>{
//     setColor("green");
//   }
  
//   return (
//     <>
//     <h1>My Favourite Color {color}</h1>
//     <button onClick={()=>setColor("RED")}>RED</button>
//     <button onClick={green}>Green</button>
//     </>
//   )
// }

// export default Calc


function Calc() {
  const [state, setState]=useState(" ");
  const [value, setValue]=useState(" ");
  const [value1, setValue1]=useState(" ");


    const add=()=>{
      const result=value+value1;
      setState(result);
    }

    const firstnumber=(e)=>{
          const num=parseInt(e.target.value);
          setValue(num);

    }
    
    const secondnumber=(e)=>{
      const number=parseInt(e.target.value);
      setValue1(number);

}


  return (
    <>
    <input type="number" onChange={firstnumber}></input>
    <input type="number" onChange={secondnumber}></input>
    <button onClick={add}>ADD</button>
    <div>Result:{state}</div>
    
    </>
  )
}

export default Calc