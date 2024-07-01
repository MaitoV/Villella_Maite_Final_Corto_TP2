import express from 'express';
import Controlador from '../controlador/sondas.js';

class Router {
    constructor() {
        this.router = express.Router();
        this.controlador = new Controlador();
    }
    start() {
        this.router.get('/', this.controlador.obtenerSondas);
        this.router.get('/:id', this.controlador.obtenerSonda);
        this.router.post('/', this.controlador.guardarTemperatura);
        return this.router;
    }
}


export default Router;

