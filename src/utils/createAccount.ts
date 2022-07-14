import { userRepository } from "../repositories/userRepository.js"
import { userData } from "../services/usersService.js"

export async function createAccount(body: userData) {
    const insertUser = await userRepository.userSignUp(
        body.email,
        body.password
    )
}
