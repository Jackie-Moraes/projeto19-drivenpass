import { Router } from "express"
import { signUp } from "../controllers/usersController"
import { validateSignUp } from "../middlewares/validateInformation"

const usersRouter = Router()

usersRouter.post("/signup", validateSignUp, signUp)

export default usersRouter
