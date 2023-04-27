import { useEffect } from "react"

export default (props)=>{
   
    return (
        <>
        <h1>{props.abc}</h1>
            {
                props.data.map((ele,index)=>
                    <p key={index}>{ele.first_name}</p>
                    )
            }
        </>
    )
}

export async function getStaticProps(context){
  const res =   await fetch(`https://reqres.in/api/users?page=2`)
  const totalState = await res.json()
  return {
    props:{
        data:totalState.data,
        abc:50
    }
  }
}