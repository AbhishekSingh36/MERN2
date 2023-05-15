const Joi = require('joi')

const schema = Joi.object().keys({
    //this is the schema
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid('male','female')
})
.or('age', 'gender') 