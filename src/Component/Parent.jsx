import { useState } from "react"
import Child from "./Child"

const Parent = () => {

    const [ftext,chftext] =  useState("Hello Dhana!!");
    const [chdata,chText] = useState("")

    const cdata = (data) => {
        chText(data)
    }


    return (
        <>
            <h3>Parent Component</h3>
            <Child info = {ftext} cdatt = {cdata}></Child>
            <h3>Child Component </h3>
            <p>Component info : <b>{chdata}</b></p>
        </>
    )

}

export default Parent