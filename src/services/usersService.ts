import { users } from "@prisma/client"
import { userRepository } from "../repositories/userRepository"

type createUserData = Omit<users, "id">

async function ensureEmailIsNotInUse(email: string) {
    const exists = await userRepository.checkIfEmailExists(email)
    if (exists)
        throw { type: "emailAlreadyInUse", message: "Email already in use!" }
}

async function createAccount(body: createUserData) {
    const insertUser = await userRepository.userSignUp(
        body.email,
        body.password
    )
}

async function userSignUp(body: createUserData) {
    await ensureEmailIsNotInUse(body.email)

    await createAccount(body)
}

export const usersService = {
    userSignUp,
}
