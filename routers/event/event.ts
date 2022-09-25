import express,{ Request, Response } from "express";
import event from '../../db/models/event/events'
const router = express.Router()
import { uid } from 'uid';


router.get('/', async (req: Request, res: Response) => {
 
  
  try {
    let user = await event.find();
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/create', async (req:Request, res: Response) => {
    
    
    try { 
    let user = await event.create({event_id:uid(),eventName:req.query.eventName,eventDate:req.query.eventDate,imageLink:req.query.imageLink,host:req.query.host,location: req.query.location,desc: req.query.desc,available: req.query.available,domain: req.query.domain,price: req.query.price,duration: req.query.duration});
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req:Request, res: Response) => {
   
    try {
        let record = await event.findOne({ eventName: req.query.eventName?.toString() });
        res.status(201).json(record);
        
       
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await event.findByIdAndUpdate(req.query.eventName, { eventName:req.query.eventName?.toString() });
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await event.findByIdAndDelete(req.query.eventName);
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



export default router