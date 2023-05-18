import { useEffect, useState } from "react"
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default ()=>{
  
    const [data,setData] = useState([])
  //  const { data, error } = useSWR('http://localhost:3002/crud/listEmployee', fetcher);
    useEffect(()=>{
       // callApi()
    },[])
    const callApi = async ()=>{
        const res = await fetch(`http://localhost:3002/crud/listEmployee`)
        const resData = await res.json()
        console.log(resData)
        if(resData){
            setData(resData)
        }
    }

    const dd = ()=>{
        const data = <Call />
        setData(data)
    }
    return (
        <>
          {data} 
        <button onClick={dd}>call karo na</button>        
        </>
    )
}

function Call(){
   const {data} =  useSWR('http://localhost:3002/crud/listEmployee', fetcher)
   return  ( 
    <ul>
    {
        data?.map((ele,index)=>{
            return (
                <li key={index}>{ele.empName}</li>
            )
        }
        )
    }
</ul>
   )
}