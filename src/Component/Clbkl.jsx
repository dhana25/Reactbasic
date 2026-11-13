import { useEffect, useState } from "react"

const Clbkl = ({item}) => {

    const [getItem,chItem] = useState([]);

    useEffect(() => {
        console.log("Input lit")
        chItem(item)
    },[item])

    return(
        <div>
            {getItem.map((val) => (
                 <div key={val}>{val}</div>
            ))}
        </div>
    )

}

export default Clbkl