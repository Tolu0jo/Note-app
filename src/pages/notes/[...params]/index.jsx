/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router'


const Page = () => {
  const router = useRouter()
  const {params}= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {params} </h1>
    </div>
  )
}

export default Page