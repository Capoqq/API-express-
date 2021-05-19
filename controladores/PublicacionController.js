var mongoose = require('mongoose');
require('../modelos/personaModel.js');
require('../modelos/publicacionModel.js');
var personaModel = mongoose.model('Persona');
var publicacionModel = mongoose.model('Publicacion');

//Agregando ticket
exports.addPublicacion = function (req,callback){
    var objPublicacion = new publicacionModel();
    objPublicacion.Contenido = req.body.Contenido;
    objPublicacion.IdPersona = req.body.IdPersona;
    objPublicacion.IsProfesional = req.body.IsProfesional;
    objPublicacion.save(function(error,publicacion){
        if(error) callback({estado: {codigo:2, respuesta: err.message}});
        callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, usuario: publicacion});
    });
}
exports.updatePublicacion = function(req, callback){
    publicacionModel.findById(req.params.id, function(err,publicacionBuscada){
      publicacionBuscada.Contenido = req.body.Contenido;
      publicacionBuscada.IdPersona = req.body.IdPersona;
      publicacionBuscada.IsProfesional = req.body.IsProfesional;
      publicacionBuscada.save(function(error,resultadoUpdate){
           if(error) callback({estado: {codigo:2, respuesta: error.message}});
           callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, persona: resultadoUpdate});
       });
    })
    
}
exports.deletePublicacion = function(req, callback){
    publicacionModel.findById(req.params.id, function(err){
        
        publicacionModel.remove(function(error,publicacionBuscada){
             if(error) callback({estado: {codigo:2, respuesta: err.message}});
             callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, publicacion:publicacionBuscada});
         });
      })
}
//Buscar una publicacion por ID
exports.findByIdPublicacion = function(req, callback){
    publicacionModel.findById(req.params.id, function(err, publicacionBuscada){   
             if(err) callback({estado: {codigo:2, respuesta: err.message}});
             callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, publicacion:publicacionBuscada});
         });
     
}
//Filtrar todas las persona del contenedor
exports.findAllPublicacion = function(req, callback){
    publicacionModel.find({}, function(err, publicacionBuscada){   
        if(err) callback({estado: {codigo:2, respuesta: err.message}});
        callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, personas: publicacionBuscada});
    }); 
}