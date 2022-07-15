import { cardsRepository } from "../repositories/cardsRepository.js"

export async function checkCardOwnership(cardId: number, userId: number) {
    const exists = await cardsRepository.checkCardOwnership(cardId, userId)
    if (!exists) {
        throw {
            type: "cardConflict",
            message: "Card does not exist or belongs to another user.",
        }
    }
}
