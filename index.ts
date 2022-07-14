import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import handleErrors from "./src/middlewares/errorHandlerMiddleware"
import usersRouter from "./src/routers/usersRouter"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(handleErrors)

// Routers

app.use(usersRouter)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log("servidor em pé na porta ", PORT)
})
