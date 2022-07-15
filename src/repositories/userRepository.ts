import bcrypt from "bcrypt"

import { client } from "../config/database.js"

async function checkIfEmailExists(email: string) {
    const exists = await client.users.findUnique({
        where: {
            email,
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

async function checkTokenOwnership(name: string) {
    const exists = await client.sessions.findFirst({
        where: {
            name,
        },
    })
    console.log(exists)
    return exists
}

export const userRepository = {
    checkIfEmailExists,
    userSignUp,
    userSignIn,
    checkTokenOwnership,
}
