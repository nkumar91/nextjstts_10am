import Header from "@/components/layout/Header"
import { useRouter } from "next/router"

export default function Home(){
    const {id} = useRouter().query
    return(
        <>
        <Header/>
        <p>Service {`${id?.[0]} ${id?.[1]} ${id?.[2]}`}</p>
        </>
    )
}