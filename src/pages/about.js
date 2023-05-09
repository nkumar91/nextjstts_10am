import { userContext } from "@/context/Context"
import { useContext } from "react"

export default ()=>{
    const {name,fun,j} = useContext(userContext)
    return (
     <h1>
        About js {name} {j}
        <button onClick={()=>fun()}>click karo na !!</button>
     </h1>
    )
}