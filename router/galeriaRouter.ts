import "reflect-metadata";
import { container } from 'tsyringe';
import express, { Request, Response } from "express";
import { GaleriaController } from "../controller/galeriaController";

const galeriaRouter = express();
const galeria = container.resolve(GaleriaController);

galeriaRouter.route("/api/v1/galeria/:page/:qtd").get((req: Request, res: Response) => {
    return galeria.get(req, res);
});

galeriaRouter.route("/api/v1/galeria/:id").get((req: Request, res: Response) => {
    return galeria.getById(req, res);
});

export default galeriaRouter;