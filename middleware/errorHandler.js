import { ErrorPersonalizado } from "../utils/ErrorPersonalizado.js";

const errorHandler = (error, req, res, next) => {
    const codigoEstado = error.codigoEstado || 500;
    const mensaje = error.message || 'Error interno del servidor';
    
    if(error instanceof ErrorPersonalizado) return res.status(codigoEstado).json({errorMsg: mensaje})
}

export default errorHandler;