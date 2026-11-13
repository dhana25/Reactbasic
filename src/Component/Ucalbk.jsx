import { useCallback, useState } from "react"
import Clbkl from "./Clbkl";

const Ucalbk = () => {
    const [num,chNum] = useState(0);
    const [dark,chDark] = useState(false)
    const clbk1 =  useCallback(() => {
        return  [num,num+1,num+2]
    },[num])
    const theme = {
        'backgroundColor' : dark ? 'black' : 'white',
        'color' : dark ? 'white' : 'black'
    }

    return (
        <div style={theme}>
            <h3>Use callbk</h3>
        <input type="number" value={num} onChange={(e) => chNum(parseInt(e.target.value))}></input>
        <button type="button" onClick={() => chDark(prev => !prev)}>Callbk</button>
        <Clbkl item={clbk1}></Clbkl>
        </div>
    )

}

export default Ucalbk