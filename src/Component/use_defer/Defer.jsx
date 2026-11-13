import Lazy from "./Lazy"
import { useDeferredValue, useState } from "react"

const Defer = () => {

    const [query,Chquery] = useState("")
    const defervalue = useDeferredValue(query)
    
        return (
            <>
             <h3>Use Defervalue</h3>
             <input type="text" value={query} onChange={(e)=>Chquery(e.target.value)} placeholder="Enter Value"></input>
             <br></br>
             <Lazy text={defervalue}></Lazy>
            </>
        )
    
}

export default Defer