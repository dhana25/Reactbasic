import { useEffect, useState } from "react"

const defaultVal = [1,2,3,4,5];

const Lazy = ({text}) => {

    const defVal = [1, 2, 3, 4, 5];

    const [list, changeList] = useState(defVal);
    const size = 1000;
    const value = text;

    useEffect(() => {
        if (value === "") {
            return;
        }
        const data = [];
        for (let i = 0; i <= size; i++) {
            data[i] = value;
        }
        changeList(data)

    }, [value])

    return (
        <>
            {
                list.map((item, index) => {
                    return <div key={index}>List Item : {item}</div>
                })
            }
        </>
    )

}

export default Lazy