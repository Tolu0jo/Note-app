import { createRouter } from "next-connect";
import notes from "../../../data/data";

const router = createRouter()
.post((req, res) => {
    const note={
        ...req.body,
        id:Date.now(),
    }
    notes.push(note);
    res.json({data:notes});
})
.get((req,res)=> {
    res.json({data:notes});
})

export default router.handler();