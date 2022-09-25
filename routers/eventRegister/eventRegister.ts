import express,{ Request, Response } from "express";
import { connect, disconnect } from '../../db/config/config'
import eventRegister from '../../db/models/eventRegister/eventRegister'
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
  connect();
  try {
    let user = await eventRegister.find();
    res.status(201).json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/create', async (req:Request, res: Response) => {
    
    
    try {
    let user = await eventRegister.create({ event_id:req.query.event_id,user_id:req.query.user_id});
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req:Request, res: Response) => {
    
    
    try {
        let record = await eventRegister.findOne({event_id:req.query.event_id?.toString()});
        res.status(201).json(record);
        
        
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await eventRegister.findByIdAndUpdate(req.query.event_id, { event_id:req.query.event_id?.toString() });
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    connect();
    try {
    let user = await eventRegister.findByIdAndDelete(req.query.event_id);
    res.json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
})



export default router