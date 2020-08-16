// logging library
import logger from '@starter-project/logger'

// import express (after npm install express)
import express from 'express'

// create new express app and save it as "app"
const app = express()

// setup middlewares
import Middewares from "Middlewares"
Middewares(app)

// server configuration
import { api } from "@starter-project/server-conn-info"
const { NODE_ENV = "development" } = process.env;
const PORT = api.port(NODE_ENV)

// import routes of API
import Router from 'Routes'

// load DB connection
import db from 'Database'
db.sync().then(() => {
  app.use('/api', Router({ db }))

  // create a route for the app
  app.get('/api', (req, res) => {
    if (NODE_ENV !== "production") {
      res.json({
        message: "this is my starter project for a Node.js API with a postgres server connection",
        PS: "please remember to set up env vars in ./.env (example is in ./env.example",
      })
    }
  })

  // when not in production, add a "ping" route
  if (NODE_ENV !== "production") {
    app.get('/api/ping', (req, res) => res.json("pong"))
  }
  
  // make the server listen to requests
  app.listen(PORT, () => {
    logger(`Server running at: ${api.url(NODE_ENV)}`)
  })

})
