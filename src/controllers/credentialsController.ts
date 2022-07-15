import { Request, Response } from "express"

import { credentialsService } from "../services/credentialsService.js"

export async function createCredential(req: Request, res: Response) {
    await credentialsService.createCredential(req.body, res.locals.userId)
    return res.sendStatus(201)
}
