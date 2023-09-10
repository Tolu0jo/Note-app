/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router'


const Page = ({note}) => { 

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export default Page

export const getServerSideProps =async({params,req,res})=>{
const response = await fetch(`http://localhost:3000/api/notes/${params.id}`)
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