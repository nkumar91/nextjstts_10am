import { useEffect, useState } from "react"

export default function useDataFetchKaroNa(url){
    const [data,setData] = useState([])
    useEffect(()=>{
      dataFetch()
    },[url])
    const dataFetch = async ()=>{
      const res =   await fetch(url)
      const dataRes = await res.json()
      if(dataRes){
        setData(dataRes)
      }
    }
    return [data]
}