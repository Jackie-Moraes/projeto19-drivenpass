import { NextFunction, Request, Response } from "express"

import { client } from "../config/database"
import signUpSchema from "./schemas/signUpSchema"

export async function validateSignUp(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = signUpSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error }
    }

    next()
}
