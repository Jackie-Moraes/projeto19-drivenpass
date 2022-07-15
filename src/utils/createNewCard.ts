import { cardsRepository } from "../repositories/cardsRepository.js"
import { cardsData } from "../services/cardsServices.js"

export async function createNewCard(body: cardsData, userId: number) {
    await cardsRepository.createNewCard(body, userId)
}
