import express,{ Request, Response } from "express";
import allowCertificate from '../../db/models/allowCertificate/allowCertificate'
import { uid } from 'uid';
const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
 
    try {
        let event_id = req.query.event_id!.toString();
        let user_id = req.query.user_id!.toString();
        let { allow }:any = await allowCertificate.findOne({ event_id: event_id });
        console.log('allow',allow);
        if (allow) {
            req.query.event_id = event_id;
            req.query.user_id = user_id;
            req.query.certificate_id = uid();
            req.query.certificateLink = '../../static/' + req.query.user_id + '.png';

            res.redirect('../certificate/create');
        } else {
            res.status(200).json("certificate will be distributed after the event ends")
        }
  }
  catch(err) {
    console.log(err);
  }
})





export default router