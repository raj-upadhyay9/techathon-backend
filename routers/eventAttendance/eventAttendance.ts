import express,{ Request, Response } from "express";
import eventAttendance from '../../db/models/eventAttendance/eventAttendance'
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
  
  try {
    let user = await eventAttendance.find();
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/create', async (req:Request, res: Response) => {
    
    
    try {
    let user = await eventAttendance.create({ event_id: req.query.event_id, user_id: req.query.user_id,certificate_id:req.query.certificate_id});
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req:Request, res: Response) => {
    
    
    try {
        let record = await eventAttendance.findOne({user_id:req.query.user_id?.toString(),event_id:req.query.event_id?.toString()});
        res.status(201).json(record);
        
       
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await eventAttendance.findByIdAndUpdate(req.query.eventAttendance_id, { certificate_id:req.query.certificate_id?.toString() });
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await eventAttendance.findByIdAndDelete(req.query.user_id);
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



export default router