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
objPersona.IdEmpresa = req.body.IdEmpresa   
 objPersona.save(function(error,retorno){
     if(error) callback({estado: {codigo:2, respuesta: err.message}});
     callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, usuario: retorno});
 });
 }
 //Actualizar
 exports.updatePersona = function(req, callback){
     personaModel.findById(req.params.id, function(err,personaBuscada){
       personaBuscada.Nombre = req.body.Nombre;
       personaBuscada.Apellido = req.body.Apellido;
       personaBuscada.Edad = req.body.Edad;
       personaBuscada.Sexo = req.body.Sexo;
       personaBuscada.IsProfesional = req.body.IsProfesional;
       personaBuscada.IdEmpresa = req.body.IdEmpresa
       personaBuscada.save(function(error,resultadoUpdate){
            if(error) callback({estado: {codigo:2, respuesta: error.message}});
            callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, persona: resultadoUpdate});
        });
     })
     
}
//Eliminar
exports.deletePersona = function(req, callback){
    personaModel.findById(req.params.id, function(err){
        
        personaBuscada.remove(function(error,personaBuscada){
             if(error) callback({estado: {codigo:2, respuesta: err.message}});
             callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, persona:personaBuscada});
         });
      })
}
//Buscar una persona por ID
exports.findByIdPersona = function(req, callback){
    personaModel.findById(req.params.id, function(err, personaBuscada){   
             if(err) callback({estado: {codigo:2, respuesta: err.message}});
             callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, persona:personaBuscada});
         });
     
}
//Filtrar todas las persona del contenedor
exports.findAllPersona = function(req, callback){
    personaModel.find({}, function(err, personasBuscada){   
        if(err) callback({estado: {codigo:2, respuesta: err.message}});
        callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, personas: personasBuscada});
    }); 
}
exports.login = function(req, callback){
  personaModel.f
}