export default ({data})=>{
    return(
        <>
        <h1>Hi Employee {data.empName}</h1>
        </>
    )
}

export async function getStaticPaths(){
    const res = await fetch(`http://localhost:3002/crud/listEmployee`)
    const data = await res.json()
    const paths = data.map((emp) => ({
        params: {emp_id: emp._id },
      }));
     
      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
      return { paths, fallback: false };
}
export async function getStaticProps(context){
    const res = await fetch(`http://localhost:3002/crud/listEmployee/${context.params.emp_id}`)
    const empData = await res.json()
    return {
        props:{
            data:empData.data
        }
    }
}