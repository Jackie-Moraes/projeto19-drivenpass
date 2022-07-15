import joi from "joi"

import { notesData } from "../../services/notesService.js"

const notesSchema = joi.object<notesData>({
    title: joi.string().max(50).required(),
    description: joi.string().max(1000).required(),
})

export default notesSchema
