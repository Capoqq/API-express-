
const express = require('express');
const bodyParser = require("body-parser");
const methodOverride = require("method-override")
const mongoose = require("mongoose");
const app = express();
//Configuracion
app.use(express.json())
app.use(methodOverride())
//Definir puerto de escucha
app.listen(5000, () => {
    console.log("Servidor en puerto 5000")
});

/* const router = express.Router();
app.use(router) */
app.get('/',(req,res) => {
    res.json({
        username: 'Capoq',
        lastname: 'Didier'
    })
});
app.post('/user/:id',(req,res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('POST REQUEST RECIEVED')
})
app.put('/contact',(req,res) => {
    res.send('UPDATE REQUEST RECEIVED')
})
app.delete('/user/:id',(req,res) => {
    res.send(`User ${req.params.id} deleted`)
})