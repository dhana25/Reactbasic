import { useMemo, useState } from "react"

const Umemo = () => {

    
    const [num,changeNum] = useState(0);
    const [dark,changeDk] = useState(false);
    const double =useMemo(() => {
            return  slowfn(num);
    },[num])
    const theme = {
        'backgroundColor' : dark ? 'black' : 'white',
        'color' : dark ? 'white' : 'black'
    }

    function slowfn(num) {
        console.log("Input inde",num);
        for(let i=0;i<100;i++){
            return num + 4
        }
    }


    return (
        <>
          <h3>Use Memo</h3>
          <input type="number" value={num} onChange={(e)=>changeNum(parseInt(e.target.value))} ></input>
          <button onClick={() => changeDk((prev)  => !prev)}>MEMO</button>
          <div style={theme}>{double}</div>
        </>
    )

}

export default Umemo