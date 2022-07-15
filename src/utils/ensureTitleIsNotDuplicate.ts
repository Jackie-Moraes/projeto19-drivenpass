import { credentialsRepository } from "../repositories/credentialsRepository.js"

export async function ensureTitleIsNotDuplicate(title: string, userId: number) {
    const exists = await credentialsRepository.checkIfTitleIsDuplicate(
        title,
        userId
    )

    if (exists) {
        throw { type: "titleAlreadyExists", message: "Title already in use." }
    }
}
