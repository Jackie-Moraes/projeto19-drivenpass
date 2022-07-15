import { Router } from "express"

import {
    createCard,
    deleteCard,
    getAllCards,
    getSingleCard,
} from "../controllers/cardsController.js"
import {
    validateCard,
    validateToken,
} from "../middlewares/validateInformation.js"

const cardsRouter = Router()

cardsRouter.post("/cards", validateCard, validateToken, createCard)
cardsRouter.get("/cards", validateToken, getAllCards)
cardsRouter.get("/cards/:id", validateToken, getSingleCard)
cardsRouter.delete("/cards/:id", validateToken, deleteCard)

export default cardsRouter
