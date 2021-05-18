 var mongoose = require('mongoose');
 require('../modelos/personaModel.js');
 require('../modelos/publicacionModel.js');
 var personaModel = mongoose.model('Persona');
 var PublicacionModel = mongoose.model('Publicacion');
//Agregar objeto persona al contenedor
 exports.addPersona = function(req, callback){
 var objPersona = new personaModel();
 objPersona.Nombre = req.body.Nombre;
 objPersona.Apellido = req.body.Apellido;
 objPersona.Edad = req.body.Edad;
 objPersona.Sexo = req.body.Sexo;
 objPersona.IsProfesional = req.body.IsProfesional;

 objPersona.save(function(error,retorno){
     if(err) callback({estado: {codigo:2, respuesta: err.message}});
     callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, usuario: retorno});
 });
 }
 //Actualizar
 exports.updatePersona = function(req, callback){
     
}
//Eliminar
exports.deletePersona = function(req, callback){
     
}
//Buscar una persona por ID
exports.findByIdPersona = function(req, callback){
     
}
//Filtrar todas las persona del contenedor
exports.findAllPersona = function(req, callback){
     
}