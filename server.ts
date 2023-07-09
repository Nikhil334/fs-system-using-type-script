import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import {router} from './routes/routes';


dotenv.config();
const app = express();

const port = process.env.PORT;

app.use("/",router);
app.use("/upload",router);
app.use("/merge",router);
app.use("/display",router);
app.use("/delete",router);


app.listen(port,()=>{
    console.log(`I am listening at port number ${port}`);
})


