import { useRef } from "react"
import Uimpch from "./Uimpch"

const Uimp = () => {

    const inpRef = useRef(null);

    const handlefocus = () => {
        inpRef.current.focusInp()
    }

    return (
        <>
          <h3>Uimperative Handle - pt</h3>
          <Uimpch ref={inpRef}></Uimpch>
          <button onClick={()=>handlefocus()}>Focus on click</button>
        </>
    )

}

export default Uimp