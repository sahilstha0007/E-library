import Joi from "joi";

export const validateStudent = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    department: Joi.string().required(),
  });
  return schema.validate(data);
};
export const validateStudentUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email(),
    department: Joi.string(),
  }).min(1);
  return schema.validate(data);
};

export const validateBook = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().required(),
    quantity: Joi.number().integer().min(0).required(),
  });
  return schema.validate(data);
};

export const validateBookUpdate = (data) => {
  const schema = Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    isbn: Joi.string(),
    quantity: Joi.number().integer().min(0),
  }).min(1);
  return schema.validate(data, { stripUnknown: true });
};
