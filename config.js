import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080;
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'; // 'MEM'
const TOTAL_SONDAS_USO = process.env.TOTAL_SONDAS_USO || 5;

export {
    PORT,
    MODO_PERSISTENCIA,
    TOTAL_SONDAS_USO
}