import { Router } from "express"

import { validateCard, validateToken } from "../middlewares/validateInformation"

const cardsRouter = Router()

cardsRouter.post("/cards", validateCard, validateToken)

export default cardsRouter
