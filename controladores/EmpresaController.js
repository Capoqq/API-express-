var mongoose = require('mongoose');
require('../modelos/personaModel.js');
require('../modelos/publicacionModel.js');
require('../modelos/empresaModel')
var empresaModel = mongoose.model('Empresa');

//Agregando ticket
exports.addEmpresa = function (req,callback){
    var objEmpresa = new empresaModel();
    objEmpresa.Nombre = req.body.Nombre;
    objEmpresa.Id= req.body.Id;
    objEmpresa.clave = req.body.clave;
    objEmpresa.estado = req.body.estado;
    objEmpresa.save(function(error,empresa){
        if(error) callback({estado: {codigo:2, respuesta: err.message}});
        callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, empresa: empresa});
    });
}
exports.updateEmpresa = function(req, callback){
    empresaModel.findById(req.params.id, function(err,empresaBuscada){
      empresaBuscada.Nombre = req.body.Nombre;
      empresaBuscada.Id = req.body.Id;
      empresaBuscada.clave = req.body.clave;
      empresaBuscada.save(function(error,resultadoUpdate){
           if(error) callback({estado: {codigo:2, respuesta: error.message}});
           callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, empresa: resultadoUpdate});
       });
    })
    
}
exports.deleteEmpresa = function(req, callback){
   empresaModel.findById(req.params.id, function(err){
        
        empresaModel.remove(function(error,empresaBuscada){
             if(error) callback({estado: {codigo:2, respuesta: err.message}});
             callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, empresa:empresaBuscada});
         });
      })
}
//Buscar una publicacion por ID
exports.findByIdEmpresa= function(req, callback){
    empresaModel.findById(req.params.id, function(err, empresaBuscada){   
             if(err) callback({estado: {codigo:2, respuesta: err.message}});
             callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, empresa:empresaBuscada});
         });
     
}
//Filtrar todas las publicaciones del contenedor
exports.findAllEmpresa= function(req, callback){
    empresaModel.find({}, function(err, empresaBuscada){   
        if(err) callback({estado: {codigo:2, respuesta: err.message}});
        callback({estado:{codigo:1,respuesta: 'Proceso exitoso'}, empresa: empresaBuscada});
    }); 
}