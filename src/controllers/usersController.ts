import bcrypt from "bcrypt"
import { Request, Response } from "express"

import { usersService } from "../services/usersService"

export async function signUp(req: Request, res: Response) {
    await usersService.userSignUp(req.body)
    return res.sendStatus(201)
}
