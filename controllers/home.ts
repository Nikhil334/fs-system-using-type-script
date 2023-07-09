import express,{Request,Response} from 'express';
import home from '../sevices/homeservice';

const homecontroller = (req:Request,res:Response):void=>{
   home(req,res);
}

export default homecontroller;