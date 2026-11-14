import { useEffect, useState } from "react";

const Prac = () => {

    const [name,chName] = useState("");
    const [opt,chOpt] = useState("");
    const [tarea,chTarea] = useState("")

    const handleInput = (event) => {
        chName(event.target.value)
    }

    const handleOption = (event) => {
        chOpt(event.target.value)
    }

    const handleText = (event) => {
        chTarea(event.target.value)
    }

    return (
        <>
            <h3>OnChange Event - {name} - {opt} - {tarea}</h3>
            <input type="text" value={name} onChange={handleInput}></input>
            <select value={opt} onChange={handleOption}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
            </select>
            <textarea value={tarea} onChange={handleText} row="5" col="5">

            </textarea>

        </>
    )


}

export default Prac