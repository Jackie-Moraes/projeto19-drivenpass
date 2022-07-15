import { notesRepository } from "../repositories/notesRepository"

export async function checkNoteOwnership(noteId: number, userId: number) {
    const exists = await notesRepository.checkNoteOwnership(noteId, userId)
    if (!exists) {
        throw {
            type: "noteConflict",
            message: "Note does not exist or belongs to another user.",
        }
    }
}
