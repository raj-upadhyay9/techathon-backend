import express,{ Request, Response } from "express";
import allowCertificate from '../../db/models/allowCertificate/allowCertificate'
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
  
  try {
    let user = await allowCertificate.find();
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/create', async (req:Request, res: Response) => {
    
    
    try {
    let user = await allowCertificate.create({ event_id: req.query.event_id,allow: req.query.allow});
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req:Request, res: Response) => {
    
    
    try {
        let record = await allowCertificate.findOne({event_id:req.query.event_id?.toString()});
        res.status(201).json(record);
        
       
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await allowCertificate.findByIdAndUpdate(req.query.event_id, { allow:true })
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await allowCertificate.findByIdAndDelete(req.query.user_id);
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



export default router