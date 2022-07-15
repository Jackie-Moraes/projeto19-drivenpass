import { cryptr } from "../repositories/credentialsRepository.js"
import { credentials } from "@prisma/client"
import { credentialsRepository } from "../repositories/credentialsRepository.js"
import { createNewCredential } from "../utils/createNewCredential.js"
import { ensureCredentialTitleIsNotDuplicate } from "../utils/ensureTitleIsNotDuplicate.js"
import { checkCredentialOwnership } from "../utils/checkCredentialOwnership.js"

export type credentialsData = Omit<credentials, "id" | "userId">

async function createCredential(body: credentialsData, userId: number) {
    await ensureCredentialTitleIsNotDuplicate(body.title, userId)
    await createNewCredential(body, userId)
}

async function returnAllCredentials(userId: number) {
    const credentials = await credentialsRepository.returnAllCredentials(userId)
    credentials.map((cred) => {
        cred.password = cryptr.decrypt(cred.password)
        delete cred.id
        delete cred.userId
    })

    return credentials
}

async function returnSingleCredential(credentialId: number, userId: number) {
    const credential = await credentialsRepository.returnSingleCredential(
        credentialId,
        userId
    )
    delete credential.id
    delete credential.userId
    credential.password = cryptr.decrypt(credential.password)

    return credential
}

async function deleteCredential(credentialId: number, userId: number) {
    await checkCredentialOwnership(credentialId, userId)
    await credentialsRepository.deleteCredential(credentialId)
}

export const credentialsService = {
    createCredential,
    returnAllCredentials,
    returnSingleCredential,
    deleteCredential,
}
