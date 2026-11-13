import { useContext } from "react"
import { Appcontext } from "./Ucontx"


const Gname = () => {

    const {text} = useContext(Appcontext)

    return (
        <>
          <p>Name : {text}</p>
        </>
    )
   

}

export default Gname