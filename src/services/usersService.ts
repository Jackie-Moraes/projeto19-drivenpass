import { users } from "@prisma/client"

import { ensureEmailIsNotInUse } from "../utils/ensureEmailIsNotInUse.js"
import { createAccount } from "../utils/createAccount.js"
import { checkEmail } from "../utils/checkEmail.js"
import { validatePassword } from "../utils/validatePassword.js"
import { createAndSendToken } from "../utils/createAndSendToken.js"

export type userData = Omit<users, "id">

async function userSignUp(body: userData) {
    await ensureEmailIsNotInUse(body.email)

    await createAccount(body)
}

async function userSignIn(body: userData) {
    const credentials = await checkEmail(body)
    await validatePassword(credentials, body.password)

    return await createAndSendToken(credentials.id, body.email)
}

export const usersService = {
    userSignUp,
    userSignIn,
}
