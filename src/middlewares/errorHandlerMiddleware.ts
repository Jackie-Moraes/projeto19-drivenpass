import {
    Errback,
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
} from "express"

export default async function handleErrors(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Schema Errors
    if (error.type === "validationError") {
        return res.status(422).send(error.message)
    }

    // Token Errors
    if (error.type === "tokenError") {
        return res.status(401).send(error.message)
    }

    // Title Exclusivity Errors
    if (error.type === "titleAlreadyExists") {
        return res.status(409).send(error.message)
    }

    // Sign Up Errors
    if (error.type === "emailAlreadyInUse") {
        return res.status(409).send(error.message)
    }

    // Sign In Errors
    if (error.type === "wrongAuthInfo") {
        return res.status(404).send(error.message)
    }

    // Credentials Errors
    if (error.type === "credentialConflict") {
        return res.status(404).send(error.message)
    }

    // Note Errors
    if (error.type === "noteConflict") {
        return res.status(404).send(error.message)
    }

    return res.status(500).send("é")
}
