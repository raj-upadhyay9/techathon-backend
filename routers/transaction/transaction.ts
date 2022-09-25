import express,{ Request, Response } from "express";
import { connect, disconnect } from '../../db/config/config'
import transaction from '../../db/models/transaction/transaction'
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
  connect();
  try {
    let user = await transaction.find();
    res.status(201).json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/create', async (req:Request, res: Response) => {
    
    connect();
    try {
    let user = await transaction.create({ transaction_id: req.query.transaction_id, user_id: req.query.user_id,event_id:req.query.event_id});
    res.status(201).json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req:Request, res: Response) => {
    
    connect();
    try {
        let record = await transaction.findOne({transaction_id:req.query.transaction_id?.toString()});
        res.status(201).json(record);
        
        disconnect();
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    connect();
    try {
    let user = await transaction.findByIdAndUpdate(req.query.transaction_id, { event_id:req.query.event_id?.toString() });
    res.json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    connect();
    try {
    let user = await transaction.findByIdAndDelete(req.query.transaction_id);
    res.json(user);
    disconnect();
  }
  catch(err) {
    console.log(err);
  }
})



export default router