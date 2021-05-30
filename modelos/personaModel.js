const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personaSchema = new Schema({
    Id:Number,
    Nombre: String,
    Apellido: String,
    Edad: Number,
    create_at: { type: Date, required: true, default: Date.now},
    Sexo: {type: String, enum: ['Masculino', 'Femenino']},
    IsProfesional: Boolean,
    IdEmpresa: {type: Schema.ObjectId, ref: 'Empresa'},
});

module.exports = mongoose.model('Persona', personaSchema)