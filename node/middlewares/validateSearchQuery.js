const Joi = require('joi')

const schema = Joi.object().keys({
    //this is the schema
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid('male','female')
})
.or('age', 'gender') 

//Query Params  - Objetc [age:2], gender: male
const validateSearchQuery = (requeest, response, next) => {
    const result = schema.validate(Request.query)
    if(result.error){
        return response.status(422).json({error})
    }
    return next();
}

module.exports = {
    validateSearchQuery
}

