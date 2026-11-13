import { useEffect, useState } from "react"

const Withauth = (Component, url) => {

    return function Withcomp(props) {
        const [temp, chTemp] = useState("");
        const [err, chErr] = useState("")
        const apiUrl = url

        useEffect(() => {
            fetch(apiUrl).then((rep) => {
                if (!rep.ok) {
                    throw new Error("Failed to Fetch Data")
                }
                return rep.json()
            }).then((rep) => {
                chTemp(rep)
            }).catch((error) => {
                chErr(err.message)
            })
        }, [])

        return (
            <Component data={temp} {...props}></Component>
        )

    }


}

export default Withauth