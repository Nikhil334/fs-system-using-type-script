import express,{Request,Response} from 'express';
import uploading from '../sevices/uploadservice';

const uploadcontroller = (req:Request,res:Response):void=>{
   uploading(req,res);
}

export default uploadcontroller;