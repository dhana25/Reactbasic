import { createContext, useState } from "react"
import Chname from "./Chname"
import Gname from "./Gname"

export const Appcontext = createContext(null)

const Ucontx = () => {

    const [name,chName] = useState("")

    return (
        <>
            <h3>Use Context</h3>
            <Appcontext.Provider value={{name,chName}}>
                <Chname></Chname>
                <br>
                </br>
                <Gname></Gname>
            </Appcontext.Provider>
        </>
    )

}

export default Ucontx