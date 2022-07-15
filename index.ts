import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import handleErrors from "./src/middlewares/errorHandlerMiddleware.js"
import usersRouter from "./src/routers/usersRouter.js"
import credentialsRouter from "./src/routers/credentialsRouter.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// Routers
app.use(usersRouter)
app.use(credentialsRouter)

// Error Handler
app.use(handleErrors)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log("servidor em pé na porta ", PORT)
})
