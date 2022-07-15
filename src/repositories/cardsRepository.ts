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
    await client.cards.create({
        data: {
            userId,
            title: body.title,
            number: body.number,
            nameCard: body.nameCard,
            securityCode: body.securityCode,
            expirationDate: body.expirationDate,
            password: body.password,
            isVirtual: body.isVirtual,
            type: body.type,
        },
    })
}

export const cardsRepository = { checkIfTitleIsDuplicate, createNewCard }
