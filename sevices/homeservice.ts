import { Request,Response } from "express";

const home = (req:Request,res:Response):void=>{
    res.status(200).send("Welcome to the FileUPloader");
}

export default home;