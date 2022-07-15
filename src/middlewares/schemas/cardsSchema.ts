import joi from "joi"

import { cardsData } from "../../services/cardsServices"

const cardsSchema = joi.object<cardsData>({
    title: joi.string().required(),
    number: joi.string().required(),
    nameCard: joi.string().required(),
    securityCode: joi.string().required(),
    expirationDate: joi.string().required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().valid("credit", "debit", "both").required(),
})

export default cardsSchema
