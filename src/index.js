const express = require('express')
const routes = require('./routes')
const sqlite3 = require('sqlite3').verbose()
const app = express();
app.use(express.json());
app.use(routes)

let db = new sqlite3.Database('./db.sqlite', (err)=>{
    if(err){
        return console.error(err.message)
    }

    console.log('Conectou ao banco de dados.')
})



app.listen(3001);