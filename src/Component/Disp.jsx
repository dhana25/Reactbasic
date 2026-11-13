import { useCallback, useContext } from "react"
import { appContext } from "./Prac"

const Disp = () => {

    const {text} = useContext(appContext)

    return (
        <>
         <h4>Diplay name : {text}</h4>
        </>
    )

}

export default Disp