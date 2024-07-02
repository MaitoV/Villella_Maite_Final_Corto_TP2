class Servicio {
    calcularEstadisticas = async (data) => {
        const informe = {
            cantidadTotalMuestradas: data.length,
            temperaturaSondas: {}
        }
        const temperaturasPorSonda = data.reduce((acc, sonda) => {
            if (!acc[sonda.id]) {
              acc[sonda.id] = [];
            }
            acc[sonda.id].push(sonda.temperatura);
            return acc;
          }, {});
        
        for (const [id, temperaturas] of Object.entries(temperaturasPorSonda)) {
            const cantidad = temperaturas.length;
            const promedio = temperaturas.reduce((sum, temp) => sum + temp, 0) / cantidad;
            informe.temperaturaSondas[id] = { cantidad, promedio };
        }
        return informe;
    }
}

export default Servicio;