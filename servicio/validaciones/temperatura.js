import Joi from 'joi';

const temperaturaSchema = Joi.object({
    id: Joi.number().integer().min(1).max(5).required(),
    temperatura: Joi.number().min(-20).max(100).required()
  });
  
export const validarTemperatura = (temperatura) => {
    const { error, value } = temperaturaSchema.validate(temperatura, { abortEarly: false });
    if (error) {
          return { error: 'Temperatura no valida'};
    }
        return { value };
};