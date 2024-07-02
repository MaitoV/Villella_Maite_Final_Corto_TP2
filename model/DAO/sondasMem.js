class ModelMem {
    #sondas;
    constructor() {
        this.#sondas = [
            {id: 1, temperatura: 34, timestamp: 'Mon Jul 01 2024 20:00:15 GMT-0300 (hora estándar de Argentina)'},
            {id: 2, temperatura: 31, timestamp: 'Mon Jun 29 2024 21:00:15 GMT-0300 (hora estándar de Argentina)'},
            {id: 2, temperatura: 31, timestamp: 'Mon Jun 29 2024 20:00:15 GMT-0300 (hora estándar de Argentina)'},
            {id: 2, temperatura: 31, timestamp: 'Mon Jun 29 2024 19:00:15 GMT-0300 (hora estándar de Argentina)'},
            {id: 3, temperatura: 36,  timestamp: 'Mon Jul 01 2024 20:00:15 GMT-0300 (hora estándar de Argentina)'}
        ]        
    }
    obtenerSondas = async () => {
        return this.#sondas;
    }
    obtenerSonda = async (id) => {
        const temperaturasEncontradas = this.#sondas.filter(sonda => sonda.id === id);
        return temperaturasEncontradas; 
    }
    guardarTemperatura = async (temperatura) => {
        this.#sondas.push(temperatura);
        return temperatura;
    }
}

export default ModelMem;

