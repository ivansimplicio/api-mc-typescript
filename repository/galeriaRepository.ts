import mongoose from "mongoose";
import { Fotos } from "../models/fotos";
import { Galeria } from "../models/galeria";

const GaleriaSchema = new mongoose.Schema<Galeria>({
    titulo: {String},
    texto: {String},
    imagem: {String},
    dataPublicacao: {Date},
    fotos: [Array<Fotos>()],
    tags: {String},
    link: {String},
    ativo: {Boolean},
});

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema);