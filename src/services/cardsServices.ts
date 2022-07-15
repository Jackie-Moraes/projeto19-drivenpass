import { cards } from "@prisma/client"

import { createNewCard } from "../utils/createNewCard.js"
import { ensureCardTitleIsNotDuplicate } from "../utils/ensureCardTitleIsNotDuplicate.js"

export type cardsData = Omit<cards, "id" | "userId">

async function createCard(body: cardsData, userId: number) {
    await ensureCardTitleIsNotDuplicate(body.title, userId)
    await createNewCard(body, userId)
}

export const cardsServices = { createCard }
