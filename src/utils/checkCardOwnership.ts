import { cardsRepository } from "../repositories/cardsRepository"

export async function checkCardOwnership(cardId: number, userId: number) {
    const exists = await cardsRepository.checkCardOwnership(cardId, userId)
    if (!exists) {
        throw {
            type: "cardConflict",
            message: "Card does not exist or belongs to another user.",
        }
    }
}
