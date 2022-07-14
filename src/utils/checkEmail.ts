import { userRepository } from "../repositories/userRepository.js"
import { userData } from "../services/usersService.js"

export async function checkEmail(body: userData) {
    const emailIsRegistered = await userRepository.checkIfEmailExists(
        body.email
    )
    if (!emailIsRegistered) {
        throw { type: "wrongAuthInfo", message: "Email or password incorrect." }
    }

    return emailIsRegistered
}
