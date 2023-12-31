/** @jsxImportSource theme-ui */
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import Link from 'next/link'

 const Page = ({notes}) => {
  // const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div sx={{width: '33%', p: 2}}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
             
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
            
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Page;

 export const getServerSideProps = async()=>{
  console.log(process.env.APP_URL)
  const res = await fetch(`${process.env.APP_URL}/api/notes`)
  const {data} = await res.json()
 
  return {
      props:{notes:data}
  }
}