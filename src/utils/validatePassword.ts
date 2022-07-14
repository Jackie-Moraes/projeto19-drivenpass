import { userData } from "../services/usersService.js"
import bcrypt from "bcrypt"

export async function validatePassword(
    credentials: userData,
    password: string
) {
    const passwordCheck = bcrypt.compareSync(password, credentials.password)
    if (!passwordCheck) {
        throw { type: "wrongAuthInfo", message: "Email or password incorrect." }
    }
}
