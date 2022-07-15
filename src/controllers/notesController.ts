import { Request, Response } from "express"

import { notesService } from "../services/notesService.js"

export async function createNote(req: Request, res: Response) {
    await notesService.createNote(req.body, res.locals.userId)
    return res.sendStatus(201)
}

export async function getAllNotes(req: Request, res: Response) {
    const notes = await notesService.returnAllNotes(res.locals.userId)
    return res.status(200).send(notes)
}

export async function getSingleNote(req: Request, res: Response) {
    const note = await notesService.returnSingleNote(
        parseInt(req.params.id),
        res.locals.userId
    )
    return res.status(200).send(note)
}
