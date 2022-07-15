import { Router } from "express"

import {
    createCredential,
    deleteCredential,
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
credentialsRouter.delete("/credentials/:id", validateToken, deleteCredential)

export default credentialsRouter
