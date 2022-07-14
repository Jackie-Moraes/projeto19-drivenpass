import { Router } from "express"

import { signIn, signUp } from "../controllers/usersController.js"
import { validateSignUp } from "../middlewares/validateInformation.js"

const usersRouter = Router()

usersRouter.post("/signup", validateSignUp, signUp)
usersRouter.post("/signin", validateSignUp, signIn)
export default usersRouter
