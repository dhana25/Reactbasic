import React, { useImperativeHandle, useRef } from "react"

const Uimpch = React.forwardRef((prop,ref) => {

    const inpRef = useRef(null);

     useImperativeHandle(ref,() => ({
        focusInp : () => {
            inpRef.current.focus()
        }  
     }))


    return (
        <>
            <input ref={inpRef} type="text"></input>
            <br></br>
        </>
    )

})

export default Uimpch