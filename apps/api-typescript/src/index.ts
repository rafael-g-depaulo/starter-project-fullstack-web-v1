import express from 'express'
import { add } from '@starter-project/adder'

const app = express()

// setup middlewares
import Middewares from "Middlewares"
Middewares(app)

// setup db connection
import Db from "Db"
import Routes from "Routes"
import User from 'Db/Entities/User'
Db()
  .then(async ({ conn }) => {

  console.log("Loading users from the database...")
  const users = await conn.manager.find(User)
  console.log("Loaded users: ", users)

  const port = add(4999, 1)
  
  app.use("/api", Routes({}))

  app.get('/hello', (_, res) => res.json({ msg: 'world' }))

  app.listen(port, () => console.log(`listening PORT ${port}, in typescript!`)) 
})
.catch(e => console.error(e))
