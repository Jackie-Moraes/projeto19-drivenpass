import { Router } from "express"

import {
    createCredential,
    getAllCredentials,
    getSingleCredential,
} from "../controllers/credentialsController.js"
import {
    validateCredentials,
    validateToken,
} from "../middlewares/validateInformation.js"

const credentialsRouter = Router()

credentialsRouter.post(
    "/credentials",
    validateCredentials,
    validateToken,
    createCredential
)
credentialsRouter.get("/credentials", validateToken, getAllCredentials)
credentialsRouter.get("/credentials/:id", validateToken, getSingleCredential)

export default credentialsRouter
