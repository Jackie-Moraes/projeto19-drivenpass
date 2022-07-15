import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

import { userRepository } from "../repositories/userRepository.js"
import cardsSchema from "./schemas/cardsSchema.js"
import credentialsSchema from "./schemas/credentialsSchema.js"
import notesSchema from "./schemas/notesSchema.js"
import signUpSchema from "./schemas/signUpSchema.js"
import wifiSchema from "./schemas/wifiSchema.js"

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

export async function validateToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "").trim()
    if (!token) {
        throw { type: "tokenError", message: "Token missing or invalid." }
    }

    const exists = await userRepository.checkTokenOwnership(token)
    if (!exists) {
        throw { type: "tokenError", message: "Token missing or invalid." }
    }

    const key = process.env.JWT_SECRET
    const tokenVerification = jwt.verify(token, key)

    if (!tokenVerification) {
        throw { type: "tokenError", message: "Token missing or invalid." }
    }

    res.locals.userId = exists.userId
    next()
}

export async function validateCredentials(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = credentialsSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error }
    }

    next()
}

export async function validateNote(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = notesSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error }
    }

    next()
}

export async function validateCard(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = cardsSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error }
    }

    next()
}

export async function validateWifi(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = wifiSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error }
    }

    next()
}
