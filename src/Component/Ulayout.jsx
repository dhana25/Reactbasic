import { useLayoutEffect, useRef, useState } from "react"

const Ulayout = () => {

    const [boxst,bxChange] = useState(0);

    const boxrf = useRef(null)

    const measure = () => {
        console.log(boxrf.current.clientHeight)
        const heiht = boxrf.current.clientHeight
        bxChange(heiht)
    }

       useLayoutEffect(() => {
        measure()
    },[])
 
    return (
        <div>
            <h3>Use Layout Effect</h3>
            <div ref={boxrf} style={{height:"10px",backgroundColor:"blue"}}>
                <p>Box</p>
            </div>
            <p>Box Height: {boxst} :px</p>
        </div>
    )

}

export default Ulayout