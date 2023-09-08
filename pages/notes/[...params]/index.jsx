import React from 'react'
import { useRouter } from 'next/router'
const page = () => {
  const router = useRouter()
  const {params}=router.query
 console.log(params)
  return (
    <div>notes:{params}</div>
  )
}

export default page