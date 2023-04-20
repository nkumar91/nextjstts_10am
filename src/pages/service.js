import   abc from '@/styles/service.module.css'
import Head from 'next/head'
import Image from 'next/image'
export default ()=>{
    return(
        <>
            <Head>
                <title>Service</title>
            </Head>
            <h1 className={`bg-blue text-danger`}>Service Page</h1>
            <Image src="/images/nature.jpg" width={100} height={100} alt="logo"></Image>
        </>
    )
}