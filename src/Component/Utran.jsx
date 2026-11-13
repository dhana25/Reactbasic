import { useState, useTransition } from "react";

const Utran = () => {

    const defaultVal = [1, 2, 3, 4, 5];

    const [name, chName] = useState("");
    const [list, chList] = useState(defaultVal);
    const sizeList = 10000;
    const [ispend, trantion] = useTransition()

    const handleChange = (e) => {

        const { value } = e.target;
        chName(value)
        const data = [];
        trantion(() => {
            for (let i = 0; i < sizeList; i++) {
                data[i] = value
            }
            chList(data)
        })

    }

    return (
        <>
            <h3>Use Transition</h3>
            <input type="text" value={name} onChange={(e) => handleChange(e)}></input>
            {
                (ispend) ? (
                    <div>Loading...</div>
                ) : (
                     list.map((list, index) => (
                    <div key={index}>List item : {list}</div>
                    ))
                )

            }
        </>
    )

}

export default Utran