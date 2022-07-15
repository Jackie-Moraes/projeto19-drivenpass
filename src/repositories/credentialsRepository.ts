import Cryptr from "cryptr"

import { client } from "../config/database.js"
import { credentialsData } from "../services/credentialsService.js"

const cryptr = new Cryptr(process.env.CRYPTR_SECRET)

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
    const encryptPassword = cryptr.encrypt(body.password)

    await client.credentials.create({
        data: {
            userId,
            title: body.title,
            url: body.url,
            username: body.username,
            password: encryptPassword,
        },
    })
}

export const credentialsRepository = {
    checkIfTitleIsDuplicate,
    createNewCredential,
}
