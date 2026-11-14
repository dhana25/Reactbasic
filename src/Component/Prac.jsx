import { useEffect, useState } from "react";

const Prac = () => {

    const [datarep, chDatarep] = useState([])

    useEffect(() => {

        const fetchdata = async () => {
            try {
                const rep = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!rep.ok) {
                    throw new Error(rep.status);
                }

                const repdata = await rep.json()
               chDatarep(repdata)

            } catch (err) {
                console.log("Failed to Fetch Api", err)
            }
        }

        fetchdata()

        return () => {
            console.log("Clean up code here")
        }

    }, [])

    return (
        <>
            <h3>Use Effect</h3>
            {
                datarep && datarep?.map((item) => (
                    <div key={item.id}>
                        <h3>User Id: {item.id}</h3>
                        <p>Name : {item.title}</p>
                        <p>Email : {item.body}</p>
                    </div>
                ))
            }

        </>
    )


}

export default Prac