import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import handleError from "./src/middlewares/errorHandlerMiddleware"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(handleError)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log("servidor em pé na porta ", PORT)
})
