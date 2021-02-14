const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'develcode'
});

app.get('/', (req, res) => {

})
app.post('/user', (req, res) => {
    /*const InsertInto = `INSERT INTO user (COD, NAME, DATE,PHOTO_URL) VALUES (${req.})`
    db.query(InsertInto, (err, result) => {
        res.send("hello Mateus")
    })*/
    console.log(req.header)
})
app.listen(3001, () => {
    console.log("it's run");
});