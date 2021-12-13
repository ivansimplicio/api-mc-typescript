import { IService } from './iService';
import { Galeria } from '../models/galeria';

/**
  * Contrato IGaleriaService
  * @summary esse contrato implementa a interface IService passando a model de Galeria
  */
export interface IGaleriaService extends IService<Galeria>{
}