import { Request,Response } from "express";
import fs from "fs";
import newfilepath from "../routes/routes";

const displaying = (req:Request,res:Response):void=>{
    fs.readFile(newfilepath,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
}

export default displaying;