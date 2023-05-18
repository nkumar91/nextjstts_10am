import useDataFetchKaroNa from "@/myhooks/Hooks"
export default ()=>{
    const [data] = useDataFetchKaroNa("http://localhost:3002/crud/listEmployee")
    return(
        <>
        {

            data?.map(ele=>
                <li>{ele.empName}</li>
                )
        }
        </>
    ) 
}