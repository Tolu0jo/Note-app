import React from 'react'
import { useRouter } from 'next/router'
const page = () => {
  const router = useRouter()
  const {params}=router.query
    
  return (
    <div>
      <h1>
        NOTE:{params}
      </h1>
      <button onClick ={e=>router.push("/")}>
        Homepage
      </button>
      <button onClick ={e=>router.push("/notes/[...params]",`/notes/${9}`)}>
   9
      </button>
    </div>
  )
}

export default page