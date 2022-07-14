import { client } from "../config/database"
import bcrypt from "bcrypt"

async function checkIfEmailExists(email: string) {
    const exists = await client.users.findUnique({
        where: {
            email: email,
        },
    })
    return exists
}

async function userSignUp(email: string, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10)

    await client.users.create({
        data: {
            email,
            password: passwordHash,
        },
    })
}

export const userRepository = {
    checkIfEmailExists,
    userSignUp,
}
