import { credentialsRepository } from "../repositories/credentialsRepository.js"
import { credentialsData } from "../services/credentialsService.js"

export async function createNewCredential(
    body: credentialsData,
    userId: number
) {
    await credentialsRepository.createNewCredential(body, userId)
}
