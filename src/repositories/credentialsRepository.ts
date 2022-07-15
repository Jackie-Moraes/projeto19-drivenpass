import Cryptr from "cryptr"

import { client } from "../config/database.js"
import { credentialsData } from "../services/credentialsService.js"

export const cryptr = new Cryptr(process.env.CRYPTR_SECRET)

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

async function returnAllCredentials(userId: number) {
    const allCredentials = await client.credentials.findMany({
        where: {
            userId,
        },
    })
    return allCredentials
}

async function returnSingleCredential(credentialId: number, userId: number) {
    const credential = await client.credentials.findFirst({
        where: {
            id: credentialId,
            userId,
        },
    })
    return credential
}

export const credentialsRepository = {
    checkIfTitleIsDuplicate,
    createNewCredential,
    returnAllCredentials,
    returnSingleCredential,
}
