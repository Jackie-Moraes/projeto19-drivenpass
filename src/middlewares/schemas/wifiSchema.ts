import joi from "joi"

import { wifiData } from "../../services/wifiServices"

const wifiSchema = joi.object<wifiData>({
    title: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required(),
})

export default wifiSchema
