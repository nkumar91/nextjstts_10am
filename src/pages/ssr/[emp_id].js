import { useRouter } from "next/router"
import { useEffect } from "react"

export default ({data})=>{
    const {emp_id} = useRouter().query 
    return(
        <>
            <h1>{emp_id}</h1>
            <h1>{data.empName}</h1>
           
        </>
    )
}

export async function getServerSideProps(context){
    const emp_id = context.params.emp_id
    console.log(emp_id)
    const res = await fetch(`http://localhost:3002/crud/listEmployee/${emp_id}`)
    const myData = await res.json()
    console.log(myData)
    if(myData.status == "success"){
        return{
            props:{
                data:myData.data
            }
        }
    }
return {
    notFound:true
}
}

