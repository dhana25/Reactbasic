import { useEffect, useState } from "react";

const Prac  = () => {

    const [count,chCount] = useState(0);
    const [name,chName] = useState("")

    const incre = () => {
        chCount(count + 1)
    }

    const decre = () => {
        chCount(count - 1)
    }

    const handle = (e) => {
        chName(e)   
    }

    return (
        <>
        <h3>Use State</h3>
            <p>{count}</p>
            <p>{name}</p>
            <button type="button" onClick={() => incre()}>Increment</button>
            <button type="button" onClick={()=> decre()}>Decrement</button>
            <input type="text" value={name} onChange={(e)=> handle(e.target.value)}></input>
        </>
    )
  
  
}

export default Prac