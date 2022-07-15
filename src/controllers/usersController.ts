import { Request, Response } from "express"

import { usersService } from "../services/usersService.js"

export async function signUp(req: Request, res: Response) {
    await usersService.userSignUp(req.body)
    return res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const token = await usersService.userSignIn(req.body)
    return res.status(200).send(token)
}
