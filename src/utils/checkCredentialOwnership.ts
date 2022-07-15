import { credentialsRepository } from "../repositories/credentialsRepository.js"

export async function checkCredentialOwnership(
    credentialId: number,
    userId: number
) {
    const exists = await credentialsRepository.checkCredentialOwnership(
        credentialId,
        userId
    )
    if (!exists) {
        throw {
            type: "credentialConflict",
            message: "Credential does not exist or belongs to another user.",
        }
    }
}
