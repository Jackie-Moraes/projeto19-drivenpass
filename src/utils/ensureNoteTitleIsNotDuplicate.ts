import { notesRepository } from "../repositories/notesRepository.js"

export async function ensureNoteTitleIsNotDuplicate(
    title: string,
    userId: number
) {
    const exists = await notesRepository.checkIfTitleIsDuplicate(title, userId)

    if (exists) {
        throw { type: "titleAlreadyExists", message: "Title already in use." }
    }
}
