import jwt from "jsonwebtoken"

import { userRepository } from "../repositories/userRepository"

export async function createAndSendToken(id: number, email: string) {
    const key = process.env.JWT_SECRET
    const tokenConfig = { expiresIn: 60 * 60 * 12 } // Twelve hours
    const token = jwt.sign({ email }, key, tokenConfig)
    await userRepository.userSignIn(token, id)

    return token
}
