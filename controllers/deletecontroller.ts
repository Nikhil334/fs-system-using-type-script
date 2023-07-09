import express,{Request,Response} from 'express';
import deleting from '../sevices/deleteservice';

const deletecontroller = (req:Request,res:Response):void=>{
   deleting(req,res);
}

export default deletecontroller;