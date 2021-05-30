const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var publicacionSchema = new Schema({
    id:Number,
    Contenido: String,
    create_at: { type: Date, required: true, default: Date.now},
    IdPersona: {type: Schema.ObjectId, ref: 'Persona'},
    IsProfesional: Boolean
});

module.exports = mongoose.model('Publicacion', publicacionSchema)