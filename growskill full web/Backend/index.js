const express = require('express');
const app = express();
const cors=require('cors');


app.use(cors())

const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"system",
    database:"growskills"
})

db.connect(()=>{
    console.log("database connected sucessfully...!");
})



app.listen(3000,()=>{
    console.log("server is Running.....!");
})

app.get('/course',(req,res)=>{
    db.query(`select * from courses`,(err,result)=>{
        console.log(result);
        res.send(result);
    }) 
});


app.get('/asset',(req,res)=>{
    db.query(`select * from digitalasset`,(err,result)=>{
        console.log(result);
        res.send(result);
    }) 


    app.get('/search', (req, res) => {
        // SQL Query to Find Matches
        const sql = "SELECT * FROM courses WHERE content LIKE ?";
        db.query(sql, [`%${query}%`], (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Database error", error: err });
            }
            res.send(results);
        });
    });

});