import { client } from "../config/database.js"
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

async function userSignIn(name: string, userId: number) {
    await client.sessions.create({
        data: {
            userId,
            name,
        },
    })
}

export const userRepository = {
    checkIfEmailExists,
    userSignUp,
    userSignIn,
}
