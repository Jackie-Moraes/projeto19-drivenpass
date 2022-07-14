import joi from "joi"

import { createUserData } from "../../services/usersService"

const signUpSchema = joi.object<createUserData>({
    email: joi.string().email().required(),
    password: joi.string().min(10).required(),
})

export default signUpSchema
