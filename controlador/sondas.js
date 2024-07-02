import Servicio from './../servicio/sondas.js';
import {ErrorBodyVacio} from './../utils/ErrorPersonalizado.js';
import esObjetoVacio from './../utils/esObjetoVacio.js';

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }
    guardarTemperatura = async (req, res, next) => {
        try {
            const temperatura = req.body;
            if(esObjetoVacio(temperatura)) throw new ErrorBodyVacio();
            const temperaturaGuardada = await this.servicio.guardarTemperatura(temperatura);
            res.json(temperaturaGuardada);
        } catch (error) {
            next(error);
        }
    }
    obtenerSondas = async (req, res) => {
        const sondas = await this.servicio.obtenerSondas();
        res.json(sondas)
    }
    obtenerSonda = async (req, res, next) => {
        try {
            const {id} = req.params;
            const sonda = await this.servicio.obtenerSonda(id);
            res.json(sonda);
        } catch (error) {
            next(error);
        }
    }
    obtenerInforme = async (req, res) => {
        const informe = await this.servicio.generarInforme();
        res.json(informe);
    }
}

export default Controlador;
