import { Router } from "express"

import {
    validateNote,
    validateToken,
} from "../middlewares/validateInformation.js"
import {
    createNote,
    deleteNote,
    getAllNotes,
    getSingleNote,
} from "../controllers/notesController.js"

const notesRouter = Router()

notesRouter.post("/notes", validateNote, validateToken, createNote)
notesRouter.get("/notes", validateToken, getAllNotes)
notesRouter.get("/notes/:id", validateToken, getSingleNote)
notesRouter.delete("notes/:id", validateToken, deleteNote)

export default notesRouter
