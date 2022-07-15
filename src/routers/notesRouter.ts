import { Router } from "express"

import {
    validateNote,
    validateToken,
} from "../middlewares/validateInformation.js"
import {
    createNote,
    getAllNotes,
    getSingleNote,
} from "../controllers/notesController.js"

const notesRouter = Router()

notesRouter.post("/notes", validateNote, validateToken, createNote)
notesRouter.get("/notes", validateToken, getAllNotes)
notesRouter.get("/notes/:id", validateToken, getSingleNote)

export default notesRouter
