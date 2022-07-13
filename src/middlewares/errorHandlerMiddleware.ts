import { NextFunction, Request, Response } from "express"

export default async function handleError(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (error.type === "error_...") return res.sendStatus(500)

    return res.sendStatus(500)
}
