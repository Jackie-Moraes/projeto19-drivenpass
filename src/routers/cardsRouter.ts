import { Router } from "express"

import { createCard, getAllCards } from "../controllers/cardsController.js"
import {
    validateCard,
    validateToken,
} from "../middlewares/validateInformation.js"

const cardsRouter = Router()

cardsRouter.post("/cards", validateCard, validateToken, createCard)
cardsRouter.get("/cards", validateToken, getAllCards)
cardsRouter.get("/cards/:id", validateToken)

export default cardsRouter
