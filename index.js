
const express = require('express');
const bodyParser = require("body-parser");
const methodOverride = require("method-override")
const mongoose = require("mongoose");
const app = express();
var controladorePersona = require('./controladores/PersonaControlador')
var controladorPublicacion = require('./controladores/PublicacionController')
//Configuracion
app.use(express.json())
app.use(methodOverride())
//Definir puerto de escucha
app.listen(5000, () => {
    console.log("Servidor en puerto 5000")
});
mongoose.connect('mongodb://localhost/express', function(err,res){
    if(err){
        console.log('ERROR: connecting to Database, ' + err);
    } else{
        console.log("Conectado a mongo db")
    }
})
const router = express.Router();
app.use(router)
app.get('/',(req,res) => {
    res.json({
        username: 'Capoq',
        lastname: 'Didier'
    })
});


//Agregar persona
router.post('/API/persona/AddPersona', function(req,res){
    controladorePersona.addPersona(req,function(data){
        res.send(data);
    })
})

//Todas las personas
router.get('/API/persona/findAllPersona', function(req,res){
    controladorePersona.findAllPersona(req,function(data){
        res.send(data);
    })
})

//Eliminar Persona
router.delete('/API/persona/DeletePersona/:id', function(req,res){
 controladorePersona.deletePersona(req, function(data){

 })
});
//Actualizar
router.put('/API/persona/UpdatePersona/:id', function (req, res){
   controladorePersona.updatePersona(req, function (data){
       res.send(data);
   }) 
})

router.get('/API/persona/findPersona/:id', function(req,res){
    controladorePersona.findByIdPersona(req,function(data){
        res.send(data);
    })
})

router.post('/API/publicacion/AddPublicacion', function(req,res){
 controladorPublicacion.addPublicacion(req, function(data){
     res.send(data)
 })
})
router.get('/API/publicacion/findAllPublication', function(req,res){
    controladorPublicacion.findAllPublicacion(req, function(data){
        res.send(data)
    })
})
router.put('/API/publicacion/UpdatePublicacion/:id', function(req,res){
    controladorPublicacion.updatePublicacion(req, function(data){
        res.send(data)
    })
})
router.delete('/API/publicacion/DeletePublicacion/:id', function(req,res){
    controladorPublicacion.deletePublicacion(req, function(data){
        res.send(data)
    })
})
router.get('/API/publicacion/findPublicacion/:id', function(req,res){
    controladorPublicacion.findByIdPublicacion(req,function(data){
        res.send(data);
    })
})
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