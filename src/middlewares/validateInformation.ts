import { NextFunction, Request, Response } from "express"

import signUpSchema from "./schemas/signUpSchema.js"

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
