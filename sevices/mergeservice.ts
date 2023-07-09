import { Request,Response } from "express";
import fs from "fs";
import newfilepath from "../routes/routes";



const merging =(req:Request,res:Response):void=>{
       const file1Path:string = `./uploads/file${req.params.no1}.txt`;
       const file2Path:string = `./uploads/file${req.params.no2}.txt`;
       fs.readFile(file1Path,(err,data)=>{
        if(err){
            res.status(404).send(err);
        }
        else{
            fs.writeFile(newfilepath,data,(err)=>{
                if(err){
                    res.status(404).send(err);
                }
            });
            fs.readFile(file2Path,(err,data)=>{
                if(err){
                    res.status(404).send(err);
                }
                else{
                    fs.appendFile(newfilepath,` ${data}`,(err)=>{
                        if(err){
                            res.status(404).send(err);
                        }
                    });
                    
                }
               })
            
        }
       })

    res.status(200).send(`New File with name ${newfilepath.substring(9)} created successfully`);
}

export default merging;

