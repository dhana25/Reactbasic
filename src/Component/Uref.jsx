import { useRef, useState } from "react"

const Uref = () => {

    const [word,chWord] = useState("");
    const inputRef = useRef(null);

    const handle = () => {
        console.log(inputRef.current.value)
        chWord(inputRef.current.value)
    }

    return (
        <div>
            <h3>Use Ref</h3>
            <input type="text" ref={inputRef} value={word} onChange={(e)=>chWord(e.target.value)}></input>
            <br></br>
            {word}
            <br></br>
            <button type="button" onClick={()=>handle()}>Get Refval</button>
        </div>
    )

}

export default Uref