import Joi from 'joi';

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const stringPassswordError = 'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length';

export const AuthSignupSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().trim()
    .lowercase(),
  password: Joi.string().regex(strongPasswordRegex).required().messages({
    'string.empty': 'Password is required',
    'string.pattern.base': stringPassswordError,
  }),
  firstname: Joi.string().required().max(50).min(3),
  lastname: Joi.string().required().max(50).min(3),
  country: Joi.string().required(),
  mobile: Joi.string().required().min(11).max(11),
  gender: Joi.string().required().valid('male', 'female')
});

export const AuthSigninSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().trim()
    .lowercase(),
  password: Joi.string().required().trim(),
});
