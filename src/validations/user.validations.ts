import Joi from 'joi';

export const UserUpdateSchema = Joi.object().keys({
  firstname: Joi.string().required().max(50).min(3),
  lastname: Joi.string().required().max(50).min(3),
  country: Joi.string().required(),
  mobile: Joi.string().required().min(11).max(11),
  gender: Joi.string().required().valid('male', 'female')
});

