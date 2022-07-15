import { cards } from "@prisma/client"
import { cryptr } from "../repositories/credentialsRepository.js"

import { cardsRepository } from "../repositories/cardsRepository.js"
import { createNewCard } from "../utils/createNewCard.js"
import { ensureCardTitleIsNotDuplicate } from "../utils/ensureCardTitleIsNotDuplicate.js"

export type cardsData = Omit<cards, "id" | "userId">

async function createCard(body: cardsData, userId: number) {
    await ensureCardTitleIsNotDuplicate(body.title, userId)
    await createNewCard(body, userId)
}

async function returnAllCards(userId: number) {
    const cards = await cardsRepository.returnAllCards(userId)
    cards.map((card) => {
        card.securityCode = cryptr.decrypt(card.securityCode)
        card.password = cryptr.decrypt(card.password)
        delete card.id
        delete card.userId
    })

    return cards
}

async function returnSingleCard(cardId: number, userId: number) {
    const card = await cardsRepository.returnSingleCard(cardId, userId)
    delete card.id
    delete card.userId
    card.password = cryptr.decrypt(card.password)
    card.securityCode = cryptr.decrypt(card.securityCode)

    return card
}

export const cardsServices = { createCard, returnAllCards, returnSingleCard }
