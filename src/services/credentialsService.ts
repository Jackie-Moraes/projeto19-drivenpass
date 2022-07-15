import { credentials } from "@prisma/client"
import { createNewCredential } from "../utils/createNewCredential.js"
import { ensureTitleIsNotDuplicate } from "../utils/ensureTitleIsNotDuplicate.js"

export type credentialsData = Omit<credentials, "id" | "userId">

async function createCredential(body: credentialsData, userId: number) {
    ensureTitleIsNotDuplicate(body.title, userId)
    createNewCredential(body, userId)
}

export const credentialsService = {
    createCredential,
}
