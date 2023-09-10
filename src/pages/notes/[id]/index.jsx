/** @jsxImportSource theme-ui */
const Page = ({note}) => { 

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export default Page

export const getServerSideProps =async({params,req,res})=>{
const response = await fetch(`${process.env.APP_URL}/api/notes/${params.id}`)
if(!response.ok){
  res.writeHead(302,{
    Location:"/notes"
  })
  res.end()

  return{
    props:{}
  }
}
const {data}=await response.json()
return{
  props:{note:data}
}
}