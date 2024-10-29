import express from "express";
import { connectdb } from "./db/connectdb.js";
import router from "./Router/dataRoutes.js";
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

console.log("I'm in backend1");
app.use(cors({origin: "http://localhost:5173", credentials: true }));
console.log("I'm in backend2");

app.get('/', (req, res)=>{
    res.send("hello world");
})

app.use('/api', router);

app.listen(3000, () =>{
    connectdb();
    console.log("server is running on port 3000");
})