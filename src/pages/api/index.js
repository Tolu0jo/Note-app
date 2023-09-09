import {createRouter} from "next-connect"

const router =createRouter()
.get((req, res)=>{
res.status(200).json({message:"ok"})
})
.post((req, res)=>{
  res.status(201).json({message:"posted"})
})

export default router.handler();