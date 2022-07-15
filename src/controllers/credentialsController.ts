import { Request, Response } from "express"

import { credentialsService } from "../services/credentialsService.js"

export async function createCredential(req: Request, res: Response) {
    await credentialsService.createCredential(req.body, res.locals.userId)
    return res.sendStatus(201)
}

export async function getAllCredentials(req: Request, res: Response) {
    const credentials = await credentialsService.returnAllCredentials(
        res.locals.userId
    )
    return res.status(200).send(credentials)
}

export async function getSingleCredential(req: Request, res: Response) {
    const credential = await credentialsService.returnSingleCredential(
        parseInt(req.params.id),
        res.locals.userId
    )
    return res.status(200).send(credential)
}

export async function deleteCredential(req: Request, res: Response) {
    await credentialsService.deleteCredential(
        parseInt(req.params.id),
        res.locals.userId
    )
    return res.sendStatus(200)
}
