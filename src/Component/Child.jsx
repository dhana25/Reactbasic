import { useEffect, useState } from "react"

const Child = ({info,cdatt}) => {

    const [text,ChText] = useState("Hello Devi!!")
    useEffect(() => {
         cdatt(text)
    })
   

    return (
        <>       
            <p>Component info : <b>{info}</b></p>
        </>
    )
}

export default Child