import express,{ Request, Response } from "express";
import certificate from '../../db/models/certificate/certificate'
import User from '../../db/models/user/users'
const router = express.Router()
import { uid } from 'uid';


router.get('/', async (req: Request, res: Response) => {
 
  
  try {
    let user = await certificate.find();
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



router.get('/create', async (req:Request, res: Response) => {
    
    
    try {
        let user = await certificate.create({ certificate_id: uid(), event_id: req.query.event_id, user_id: req.query.user_id, certificateLink: req.query.certificateLink });
        res.status(200).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req:Request, res: Response) => {
    
    
    try {
        let record = await certificate.findOne({event_id:req.query.event_id?.toString(),user_id:req.query.user_id!.toString()});
        res.status(201).json(record);
        
       
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await certificate.findByIdAndUpdate(req.query.certificate_id, {  })
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await certificate.findByIdAndDelete(req.query.user_id);
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})



export default router