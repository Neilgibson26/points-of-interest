import Joi from "joi";

export const IdSpec = Joi.alternatives()
  .try(Joi.string(), Joi.object())
  .description("a valid ID");

export const userCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("JohnDoe@gmail.com").required(),
    password: Joi.string().example("jdcoke").required(),
  })
  .label("userCredentials");

export const userSpec = userCredentialsSpec
  .keys({
    firstName: Joi.string().example("John").required(),
    lastName: Joi.string().example("Doe").required(),
    accountType: Joi.string().example("User").required(),
    isAdmin: Joi.boolean().example(false).required(),
  })
  .label("userDetails");

export const userSpecPlus = userSpec
  .keys({
    _id: IdSpec,
    __v: Joi.number(),
  })
  .label("userDetailsPlus");

export const userArray = Joi.array().items(userSpecPlus).label("UserArray");

export const poiSpec = Joi.object()
  .keys({
    title: Joi.string().example("Marys").required(),
    latitude: Joi.string().example("1234").required(),
    longitude: Joi.string().example("-1234").required(),
    city: Joi.string().example("Dublin").required(),
    country: Joi.string().example("Ireland").required(),
    description: Joi.string()
      .example(
        "This is a great place for a nice guinness, it also has live music on Mondays and Sundays"
      )
      .required(),
    category: Joi.string().example("Pub").required(),
    // _id: IdSpec,
    // __v: Joi.number(),
  })
  .label("Poi details");

export const poiArray = Joi.array().items(poiSpec).label("poiArray");
