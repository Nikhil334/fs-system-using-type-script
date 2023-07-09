import { Request,Response } from "express";

const uploading =(req:Request,res:Response):void=>{
    res.status(200).send("File uploaded successfully,thankyou!");
}

export default uploading;