export class ErrorPersonalizado extends Error {
    constructor(mensajeError, codigoError) {
        super(mensajeError);
        this.codigoEstado = codigoError;
      }
}

export class ErrorIDIncorrecto extends ErrorPersonalizado {
    constructor(mensaje = 'Número de sonda incorrecto') {
      super(mensaje, 404);
    }
}
export class ErrorTemperaturaInvalida extends ErrorPersonalizado {
    constructor(mensaje = 'Datos no válidos') {
      super(mensaje, 404);
    }
}
export class ErrorBodyVacio extends ErrorPersonalizado {
  constructor(mensaje= "El cuerpo de la solicitud no puede estar vacío. Faltan campos obligatorios.") {
    super(mensaje, 400)
  }
}