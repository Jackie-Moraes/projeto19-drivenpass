import { userRepository } from "../repositories/userRepository.js"

export async function ensureEmailIsNotInUse(email: string) {
    const exists = await userRepository.checkIfEmailExists(email)
    if (exists)
        throw { type: "emailAlreadyInUse", message: "Email already in use!" }
}
