import Link from "next/link"

export default ({data})=>{
    return(
        <>
            {data.map((ele,index)=>
                <p key={index}>
                    <Link href={`/ssr/${ele._id}`}>{ele.first_name}</Link>
                </p>
            )
            }
        </>
    )
}

export  async function getStaticProps(){
    //const res = await fetch(`http://localhost:3002/crud/listEmployee`)
    const res = await fetch(`https://reqres.in/api/users?page=2`)
    const d = await res.json()
    if(res){
        return {
            props:{
                data:d.data
            }
        }
    }
    return {
        notFound:true
    }
}