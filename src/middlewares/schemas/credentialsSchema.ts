import joi from "joi"

import { credentialsData } from "../../services/credentialsService.js"

const credentialsSchema = joi.object<credentialsData>({
    title: joi.string().required(),
    url: joi.string().uri().required(),
    username: joi.string().required(),
    password: joi.string().required(),
})

export default credentialsSchema
