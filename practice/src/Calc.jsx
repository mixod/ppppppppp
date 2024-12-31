// import { useState } from "react"

import { useState } from "react"




// function Calc() {
//   const [state,setState]= useState();
//   const [value1,setValue1]= useState();
//   const [value2,setValue2]= useState();

//   function add(){
//     const result=value1+value2;
//     setState(result);
//   }

//    function firstnumber(e){
//     const result=parseInt(e.target.value);
//     setValue1(result);
//    }
//    function secondnumber(e){
//     const result=parseInt(e.target.value);
//     setValue2(result);
//    }
  
  
//   return (
//     <>
//     <input type="number" onChange={firstnumber}></input>
//     <input type="number" onChange={secondnumber}></input>
//     <button onClick={add}>Add</button>
//     <div>result:{state} </div>

//     </>
//   )
// }

// export default Calc





function Calc() {

const [state,setState]=useState("hari");

  const neww =()=>{
    setState("shyam");
  }

  return (
    <>
    
    <button onClick={neww}>click</button>
    <div>{state}</div>
    </>
  )
}

export default Calc