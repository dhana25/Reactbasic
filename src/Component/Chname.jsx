import { useContext, useState } from "react"
import { Appcontext } from "./Ucontx"

const Chname = () => {

    const {chName} = useContext(Appcontext)

    return (
        <>
        <input type="text" onChange={(e)=>chName(e.target.value)}></input>
        </>
    )

}

export default Chname