import { useRouter } from "next/router"

export default ()=>{
    const {p_id:rasandukankharidunga} = useRouter().query   // {p_id:7}
    return(
        <>
        
        <h1>Hello Dynamic {rasandukankharidunga}</h1>
        </>
    )
}