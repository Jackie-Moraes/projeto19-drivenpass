import { cryptr } from "./credentialsRepository.js"
import { client } from "../config/database.js"
import { cardsData } from "../services/cardsServices.js"

async function checkIfTitleIsDuplicate(title: string, userId: number) {
    const exists = await client.cards.findFirst({
        where: {
            userId,
            title,
        },
    })
    return exists
}

async function createNewCard(body: cardsData, userId: number) {
    const encryptCVV = cryptr.encrypt(body.securityCode)
    const encryptPassword = cryptr.encrypt(body.password)

    await client.cards.create({
        data: {
            userId,
            title: body.title,
            number: body.number,
            nameCard: body.nameCard,
            securityCode: encryptCVV,
            expirationDate: body.expirationDate,
            password: encryptPassword,
            isVirtual: body.isVirtual,
            type: body.type,
        },
    })
}

async function returnAllCards(userId: number) {
    const allCards = await client.cards.findMany({
        where: {
            userId,
        },
    })
    return allCards
}

async function returnSingleCard(cardId: number, userId: number) {
    const card = await client.cards.findFirst({
        where: {
            id: cardId,
            userId,
        },
    })
    return card
}

export const cardsRepository = {
    checkIfTitleIsDuplicate,
    createNewCard,
    returnAllCards,
    returnSingleCard,
}
