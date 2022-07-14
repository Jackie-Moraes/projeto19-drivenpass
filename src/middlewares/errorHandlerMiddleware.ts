import { NextFunction, Request, Response } from "express"

export default async function handleErrors(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Sign Up Errors
    if (error.type === "emailAlreadyInUse") {
        return res.status(409).send(error.message)
    }

    // Schema Errors
    if (error.type === "validationError") {
        return res.status(422).send(error.message)
    }

    return res.sendStatus(500)
}
