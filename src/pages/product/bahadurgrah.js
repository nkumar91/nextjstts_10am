import Link from "next/link"
import { useRouter } from "next/router"

export default ()=>{
    const router = useRouter();
    const move = ()=>{
        router.push("/services/78/90/23")
    }
    return(
        <>
          <h1>Bahadur Grah</h1>
          <Link href="/services/67/48/90">Service</Link>
          <button onClick={move}>move karo na</button>
        </>
      
    )
}