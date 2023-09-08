import React from 'react'
import { useRouter } from 'next/router'
const page = () => {
  const router = useRouter()
  const {id}=router.query

  return (
    <div>notes:{id}</div>
  )
}

export default page