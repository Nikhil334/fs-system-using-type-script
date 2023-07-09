import express,{Request,Response} from 'express';
import merging from '../sevices/mergeservice';

const mergecontroller = (req:Request,res:Response):void=>{
   merging(req,res);
}

export default mergecontroller;