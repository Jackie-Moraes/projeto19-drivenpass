import { Router } from "express"

import { createCredential } from "../controllers/credentialsController.js"
import { validateToken } from "../middlewares/validateInformation.js"

const credentialsRouter = Router()

credentialsRouter.post("/credentials", validateToken, createCredential)

export default credentialsRouter
