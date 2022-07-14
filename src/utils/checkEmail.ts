import { userRepository } from "../repositories/userRepository"
import { userData } from "../services/usersService"

export async function checkEmail(body: userData) {
    const emailIsRegistered = await userRepository.checkIfEmailExists(
        body.email
    )
    if (!emailIsRegistered) {
        throw { type: "wrongAuthInfo", message: "Email or password incorrect." }
    }

    return emailIsRegistered
}
