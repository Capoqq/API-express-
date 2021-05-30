const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var empresaSchema = new Schema({
    id:Number,
    Nombre: String,
    clave: String,
    create_at: { type: Date, required: true, default: Date.now},
    IdPersona: {type: Schema.ObjectId, ref: 'Persona'},
    estado: Boolean
});

module.exports = mongoose.model('Empresa', empresaSchema)