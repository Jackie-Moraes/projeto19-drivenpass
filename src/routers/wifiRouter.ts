import { Router } from "express"

import {
    createWifi,
    deleteWifi,
    getAllWifi,
    getSingleWifi,
} from "../controllers/wifiController.js"
import {
    validateToken,
    validateWifi,
} from "../middlewares/validateInformation.js"

const wifiRouter = Router()

wifiRouter.post("/wifi", validateWifi, validateToken, createWifi)
wifiRouter.get("/wifi", validateToken, getAllWifi)
wifiRouter.get("/wifi/:id", validateToken, getSingleWifi)
wifiRouter.delete("/wifi/:id", validateToken, deleteWifi)

export default wifiRouter
