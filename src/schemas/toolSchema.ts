import joi from "joi";

const toolSchema = joi.object({
  title: joi.string().required(),
  link: joi.string().uri().required(),
  description: joi.string().required(),
  tags: joi.array().items(joi.string().required()),
});

export default toolSchema;
