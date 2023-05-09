import { userContext } from "@/context/Context"
import { useContext } from "react"

export default ()=>{
    const {name} = useContext(userContext)
    return(
        <>
        <h1>Nhi Mila {name}</h1>
        </>
    )
}