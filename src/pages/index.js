import H from "@/components/Home/H"
import { useEffect, useState } from "react"


export default ()=>{
  const [counter,setCounter] = useState(0)

  useEffect(()=>{
    setCounter(counter+10)
  },[])
  const dd = ()=>{
    setCounter(counter+1)
  }
  return(
    <>
    <h1 className="kk"> Kuch Bhi Kar Lo Nahi Padhunga sirf fee dunga or mai fee lunga</h1>
    <button onClick={dd} className="btn btn-primary">Click {counter}</button>
  <H />
    </>
  )
}