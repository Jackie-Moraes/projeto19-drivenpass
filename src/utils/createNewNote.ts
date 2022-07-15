import { notesRepository } from "../repositories/notesRepository.js"
import { notesData } from "../services/notesService.js"

export async function createNewNote(body: notesData, userId: number) {
    await notesRepository.createNewNote(body, userId)
}
