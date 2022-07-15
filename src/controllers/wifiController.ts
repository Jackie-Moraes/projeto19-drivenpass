import { Request, Response } from "express"

import { wifiServices } from "../services/wifiServices.js"

export async function createWifi(req: Request, res: Response) {
    await wifiServices.createWifi(req.body, res.locals.userId)
    return res.sendStatus(201)
}

export async function getAllWifi(req: Request, res: Response) {
    const wifi = await wifiServices.returnAllWifi(res.locals.userId)
    return res.status(200).send(wifi)
}

export async function getSingleWifi(req: Request, res: Response) {
    const wifi = await wifiServices.returnSingleWifi(
        parseInt(req.params.id),
        res.locals.userId
    )
    return res.status(200).send(wifi)
}

export async function deleteWifi(req: Request, res: Response) {
    await wifiServices.deleteWifi(parseInt(req.params.id), res.locals.userId)
    return res.sendStatus(200)
}
