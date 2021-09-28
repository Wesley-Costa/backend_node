/**
 * As partes que estão comentadas foram feitas nos momentos que ocorria uma grande alteração
 * no código, como partes que foram colocadas em outros arquivos, ou até partes que foram apagadas do código
 * 
 * Obs: Todos os passos de forma minuciosa foram seguidos assim como foi mostrado na aula.
*/

const express = require('express')
const routes = require('./routes')
// const sqlite3 = require('sqlite3').verbose()
const app = express();
app.use(express.json());
app.use(routes)

app.listen(3001);

// let db = new sqlite3.Database('./src/database/db.sqlite', (err)=>{
//     if(err){
//         return console.error(err.message)
//     }

//     console.log('Conectou ao banco de dados.')
// })