import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import handleErrors from "./src/middlewares/errorHandlerMiddleware.js"
import usersRouter from "./src/routers/usersRouter.js"
import credentialsRouter from "./src/routers/credentialsRouter.js"
import notesRouter from "./src/routers/notesRouter.js"
import cardsRouter from "./src/routers/cardsRouter.js"
import wifiRouter from "./src/routers/wifiRouter.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// Routers
app.use(usersRouter)
app.use(credentialsRouter)
app.use(notesRouter)
app.use(cardsRouter)
app.use(wifiRouter)

// Error Handler
app.use(handleErrors)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log("servidor em pé na porta ", PORT)
})
