import express,{ Request, Response } from "express";
import users from '../../db/models/user/users'
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
  try {
    let user = await users.find();
    res.status(201).json(user);
  }
  catch(err) {
    console.log(err);
  }
})



router.post('/signup', async (req:Request, res: Response) => {
    
    try {
    let user = await users.create({email_id:req.params.email_id,password:req.params.password,firstName:req.params.firstName,lastName:req.params.lastName,college:req.params.college});
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/signin', async (req:Request, res: Response) => {
    
    
    try {
        let email_id = req.params.email_id;
        let record = await users.findOne({email_id:email_id});
        let pwd = record?.password;
        if (pwd == req.params.password) {
            res.send(1);
        } else {
            res.send(0);
        }
        
       
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/findbyid', async (req: Request, res: Response) => {
 
  console.log(req.query);
  try {
    let user = await users.findOne({ email_id: req.query.email_id?.toString() });
    res.status(201).json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/updatebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await users.findByIdAndUpdate(req.params.email_id, { firstName: req.params.firstName, lastName: req.params.lastName, college: req.params.college });
    res.json(user);
    
  }
  catch(err) {
    console.log(err);
  }
})


router.post('/deletebyid', async (req: Request, res: Response) => {
 
    
    try {
    let user = await users.findByIdAndDelete(req.params.email_id);
    res.json(user);
   
  }
  catch(err) {
    console.log(err);
  }
})



export default router