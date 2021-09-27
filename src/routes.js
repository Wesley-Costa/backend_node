const express = require('express')
const routes = express.Router()

routes.get('/users', (req, res) => {
    const params = req.query;
    console.log(params)
    res.json(params)
})

routes.get('/users', (req, res) => {
    const params = req.query;
    console.log(params)
    res.json({
        nome: 'wesley',
        empresa: 'UESB'
    })
})

routes.post('/users/:id', (req, res) => {
    const params = req.params;
    console.log(params)
    res.json(params)
})


routes.post('/users', (req, res) => {
    const params = req.body;
    console.log(params)
    res.json(params)
})

module.exports = routes;

/**
 * Query: Selct * from users;
 * uery Builders: table('user').select(*).where()
 */

/**
 * GET: buscar/listar uma informação no backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação
 * DELETE: deletar uma informação do backend
 */

//  app.get('/users', (req, res) => {
//     res.json({
//         nome: 'wesley',
//         empresa: 'uesb'
//     })
// })

// app.post('/users', (req, res) => {
//     res.json({
//         nome: 'Wesley',
//         empresa: 'UESB',
//         requisicao: 'p'
//     })
// }) 

// app.put('/users', (req, res) => {
//     res.json({
//         nome: 'Wesley',
//         empresa: 'UESB',
//         requisicao: 'pu'
//     })
// }) 

/**
 * Parâmentros
 * Query: parametros nomeados enviados na rota
 * Route params: parametros para identificar um recurso
 * Request body: corpo da requisição
 */

// http://localhost:3001/users?nome=wesley&idade=21