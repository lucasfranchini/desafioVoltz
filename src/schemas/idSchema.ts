import joi from "joi";

const idSchema = joi.number().integer().positive().required();

export default idSchema;
