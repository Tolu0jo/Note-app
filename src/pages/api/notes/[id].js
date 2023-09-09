import { createRouter } from "next-connect";
import notes from "../../../data/data";

const getNote = id => notes.find(n=>n.id === parseInt(id))
const router = createRouter()
.get((req, res) => {
  const note = getNote(req.query.id)
   if(!note) return res.status(404).end()
    res.json({data:note});
})
.patch((req,res)=> {
    const note = getNote(req.query.id)
    if(!note) return res.status(404).end()
    const i = notes.findIndex(n=>n.id === parseInt(req.query.id))
    const updated = {...note,...req.body}
    notes[i] = updated
    res.status(200).json({data: updated})
})
.delete((req, res) =>{
    const note = getNote(req.query.id)
    if(!note) return res.status(404).end()
    const i = notes.findIndex(n=>n.id === parseInt(req.query.id))
    notes.splice(i, 1)
    res.status(200).json({data:req.query.id})
})
export default router.handler();