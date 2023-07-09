import express,{Request,Response} from 'express';
import displaying from '../sevices/displayservices';

const displaycontroller = (req:Request,res:Response):void=>{
   displaying(req,res);
}

export default displaycontroller;