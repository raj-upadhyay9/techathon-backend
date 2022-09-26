import express,{ Request, Response } from "express";
import users from '../../db/models/user/users'
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
  try {
    let user = await users.find();
    res.status(200).json(user);
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/signup', async (req:Request, res: Response) => {
    
    try {
    let user = await users.create({email_id:req.query.email_id,password:req.query.password,firstName:req.query.firstName,lastName:req.query.lastName,college:req.query.college});
    res.status(200).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/signin', async (req:Request, res: Response) => {
    
    
    try {
        let email_id = req.query.email_id;
        let record = await users.findOne({email_id:email_id!.toString()});
        let pwd = record!.password;
        if (pwd == req.query.password!.toString()) {
          res.status(200).json(record);
        } else {
            res.status(200).json("wrong pasword");
        }
        
       
  }
    catch (err) {
    res.status(404).json(err);
    console.log(err);
  }
})

router.post('/findbyid', async (req: Request, res: Response) => {
 
  console.log(req.query);
  try {
    let user = await users.findOne({ email_id: req.query.email_id?.toString() });
    res.status(200).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await users.findByIdAndUpdate(req.query.email_id, { firstName: req.query.firstName!.toString(), lastName: req.query.lastName!.toString(), college: req.query.college!.toString() });
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await users.findByIdAndDelete(req.query.email_id);
    res.json(user);
   
  }
  catch(err) {
    console.log(err);
  }
})



export default router