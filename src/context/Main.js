import { useState } from "react"
import { userContext } from "./Context"
export default function MainContext({children}){
    const [d,setD] = useState("Juma")
    function kahaHoBabu(){
        setD("Ram janne")
    }
    const initData = {
        name:"Mukesh Khanna Shaktimaan",
        j:d,
        fun:kahaHoBabu
    }
    return(
            <userContext.Provider value = {initData}>
                {children}
            </userContext.Provider>
    )
}