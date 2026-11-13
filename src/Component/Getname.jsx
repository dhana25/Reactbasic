import { useContext } from "react"
import { Appcontext } from "./Ucontx"


const Getname = () => {

    const {chText} = useContext(Appcontext)
    
    return (
        <div>
            <input type="text" onChange={(e)=>chText(e.target.value)}></input>
        </div>
    ) 

}

export default Getname