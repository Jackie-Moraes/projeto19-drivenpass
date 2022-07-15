import { cardsRepository } from "../repositories/cardsRepository.js"

export async function ensureCardTitleIsNotDuplicate(
    title: string,
    userId: number
) {
    const exists = await cardsRepository.checkIfTitleIsDuplicate(title, userId)

    if (exists) {
        throw { type: "titleAlreadyExists", message: "Title already in use." }
    }
}
