import { useEffect, useState } from "react"

const Clbk = ({item}) => {

    const [getItem,chItem] = useState([]);


    useEffect(() => {
        console.log("Input lit")
        chItem(item)
    },[])

    return(
        <div>
            {getItem.map((val) => (
                 <div key={val}>{val}</div>
            ))}
        </div>
    )

}

export default Clbk