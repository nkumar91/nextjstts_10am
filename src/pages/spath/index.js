import Link from "next/link"

export default ({data})=>{
    return(
        <ul>
            {
                data.map(e=>
                    <li><Link href={`/spath/${e._id}`}>{e.empName}</Link></li>
                    )
            }
        </ul>
    )
}


export async function getStaticProps(){
    const res = await fetch(`http://localhost:3002/crud/listEmployee`)
    const data = await res.json()
    return {
        props:{
            data:data
        }
    }
}