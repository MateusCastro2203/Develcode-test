const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const multer = require("multer");
const upload = multer({dest: "uploads/"})

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'develcode-test'
});
app.use(cors())
app.use(express.json())
app.use(bodyParse.urlencoded({extended: true}))

app.get('/', (req, res) => {
    const sqlGet = "SELECT * FROM user where 1"
    db.query(sqlGet,(err,result)=>{
        res.send(result)
    })
    
})

app.post('/user', upload.single(""), (req, res)  => {   
    const COD = req.body.COD;
    const NAME = req.body.NAME;
    const DATE = req.body.DATE;
    const PHOTO = 'teste';

    const sqlInsert = "INSERT INTO user (COD, NOME, DATE,PHOTO) VALUES (?,?,?,?)"
    db.query(sqlInsert, [COD,NAME,DATE,PHOTO], (err,result)=>{
        console.log(result);
    })
})

app.delete('/delete/:ID', (req,res) => {
    const ID = req.params.ID;
    console.log(req.params);
    const sqlDelete = "DELETE FROM user WHERE ID = ?"
    db.query(sqlDelete, ID, (err,result)=>{
       if(err) console.log(err);
    })
})

app.put('/update', (req,res) => {
    const ID = parseInt(req.body.ID);
    const COD = req.body.COD;
    const NAME = req.body.NAME;
    const DATE = req.body.DATE;

    const sqlUpdate = `UPDATE user SET  COD = ? , NOME = ? , DATE = ? WHERE ID = ?`
    db.query(sqlUpdate,[COD,NAME,DATE,ID], (err,result)=>{
       if(err) console.log(err);
    })
})

app.listen(3001, () => {
    console.log("it's run");
});