import ModelFactory from '../model/DAO/sondasFactory.js';
import {MODO_PERSISTENCIA, TOTAL_SONDAS_USO} from './../config.js'
import {validarTemperatura} from './validaciones/temperatura.js';
import {ErrorTemperaturaInvalida, ErrorIDIncorrecto} from './../utils/ErrorPersonalizado.js';

class Servicio {
    constructor() {
        this.modelo = ModelFactory.get(MODO_PERSISTENCIA);
    }

    obtenerSondas = async () => {
        const sondas = await this.modelo.obtenerSondas();
        return sondas;
    }
    obtenerSonda = async (id) => {
        if(id < 1 || id > TOTAL_SONDAS_USO) throw new ErrorIDIncorrecto();
        const sondaEncontrada = await this.modelo.obtenerSonda(id);
        return sondaEncontrada;
    }
    guardarTemperatura= async (temperatura) => {
        const esTemperaturaValida = validarTemperatura(temperatura);
        console.log(esTemperaturaValida);
        if(esTemperaturaValida.error) throw new ErrorTemperaturaInvalida();
        const timestamp = new Date().toString();
        temperatura.timestamp = timestamp;
        const temperaturaGuardada = await this.modelo.guardarTemperatura(temperatura);
        return temperaturaGuardada;
    } 
}

export default Servicio;


