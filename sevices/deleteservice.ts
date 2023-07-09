import { Request,Response } from "express";
import fs from "fs";

const deleting = (req:Request,res:Response):void=>{
    fs.unlink(`./uploads/file${req.params.no1}.txt`,(err)=>{
        console.log("deleted");
    });
    fs.unlink(`./uploads/file${req.params.no2}.txt`,(err)=>{
        console.log("deleted");
    });
    res.status(200).send("Deleted both file successfully successfully !");
}

export default deleting;