import { useContext } from "react"
import { AppProvide } from "./Prac"

const Context1 = () => {

    const {chtextvl} = useContext(AppProvide)

    return (
        <>
        <input type="text" onChange={(e) => chtextvl(e.target.value)}></input>
        </>
    )
}

export default Context1