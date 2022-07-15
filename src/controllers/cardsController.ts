import { Request, Response } from "express"

import { cardsServices } from "../services/cardsServices"

export async function createCard(req: Request, res: Response) {
    await cardsServices.createCard(req.body, res.locals.userId)
    return res.sendStatus(201)
}

export async function getAllCards(req: Request, res: Response) {
    const cards = await cardsServices.returnAllCards(res.locals.userId)
    return res.status(200).send(cards)
}

export async function getSingleCard(req: Request, res: Response) {
    const card = await cardsServices.returnSingleCard(
        parseInt(req.params.id),
        res.locals.userId
    )
    return res.status(200).send(card)
}
