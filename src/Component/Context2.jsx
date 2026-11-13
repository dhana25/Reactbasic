import { useContext } from "react"
import { AppProvide } from "./Prac"

const Context2 = () => {

    const {textvl} = useContext(AppProvide)
    return (
        <>
        <h5>Name : {textvl}</h5>
        </>
    )

}

export default Context2