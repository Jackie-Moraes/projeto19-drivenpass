import { Request, Response } from "express"

import { cardsServices } from "../services/cardsServices"

export async function createCard(req: Request, res: Response) {
    await cardsServices.createCard(req.body, res.locals.userId)
    return res.sendStatus(201)
}
