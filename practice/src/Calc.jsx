import { useState } from "react"


function Calc() {

const [color, setColor]=useState();

const red=()=>{
  setColor("red");
}
const green = () =>{
  setColor("green");
}

  return (
    <>
    <h1>My favourite color is {color} </h1>

    <button onClick={red}>red</button>
    <button onClick={green}>green</button>
    <button onClick={()=> setColor("yellow")}>yellow</button>
    </>
  )
}

export default Calc
