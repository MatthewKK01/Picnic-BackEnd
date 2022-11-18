import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();
const db = mysql.createConnection({
    host : "localhost",
    user:"root",
    password:"Mate1010",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/" , (req,res)=>{
    const q = "SELECT ANSWER,Count FROM test.whatsgoodlydata WHERE Count > 5000"
    db.query(q, (err,data)=>{
        if(err) return res.json()
        return res.json(data);
    })
})


app.listen(8800,()=>{
    console.log("Connected To BackEnd");
})