import { client } from "../config/database.js"
import { credentialsData } from "../services/credentialsService.js"

async function checkIfTitleIsDuplicate(title: string, userId: number) {
    const exists = await client.credentials.findFirst({
        where: {
            userId,
            title,
        },
    })
    return exists
}

async function createNewCredential(body: credentialsData, userId: number) {
    await client.credentials.create({
        data: {
            userId,
            title: body.title,
            url: body.url,
            username: body.username,
            password: body.password,
        },
    })
}

export const credentialsRepository = {
    checkIfTitleIsDuplicate,
    createNewCredential,
}
