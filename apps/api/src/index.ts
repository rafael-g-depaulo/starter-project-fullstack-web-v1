import express from 'express'

const app = express()

// setup middlewares
import Middewares from "Middlewares"
Middewares(app)

// setup db connection
import Db from "Db"
import Routes from "Routes"
import { actionSuccessful, badRequestError } from 'Utils/endpointReturns'
import { getApiUrl } from '@starter-project/server-conn-info'
import { add } from '@starter-project/adder'
// import User from 'Db/Entities/User'
Db()
  .then(async ({ conn }) => {

  // console.log("Loading users from the database...")
  // const users = await conn.manager.find(User)
  // console.log("Loaded users: ", users)

  const port = !!process.env.PORT && /^\d+$/.test(process.env.PORT) ? Number(process.env.PORT) : 5000
  
  app.use("/", Routes({ conn }))
  app.get("/", (_, res) => actionSuccessful(res, { msg: 'Hello, world!' }))
  app.use("*", (req, res) => badRequestError(res, `Route "${req.originalUrl}" doesn't exist`))

  app.listen(port, () => console.log(`API running at ${getApiUrl()}. ${add(3, 2)}`)) 
})
.catch(e => console.error(e))
