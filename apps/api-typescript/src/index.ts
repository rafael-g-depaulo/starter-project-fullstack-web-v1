import express from 'express'
import { add } from '@starter-project/adder'

const app = express()

// setup middlewares
import Middewares from "Middlewares"
Middewares(app)

const port = add(3000, 23)

app.listen(port, () => console.log(`listening PORT ${port}, in typescript!`))
