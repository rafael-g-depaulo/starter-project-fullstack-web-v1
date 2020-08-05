// import express (after npm install express)
import express from 'express'
import path from 'path'

// create new express app and save it as "app"
const app = express()

// setup middlewares
import Middewares from "Middlewares"
Middewares(app)

// server configuration
const { PORT = "8000", NODE_ENV = "development" } = process.env;

// import routes of API
import Router from 'Routes'

// load DB connection
import db from 'Database'

import logger from '@starter-project/logger'
logger(123)

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

  // any requests that dont have an API path, map to react bundle
  if (NODE_ENV === "production") {
    const appBundleFolder = path.join(__dirname, '../../client/build') 
    
    app.use(express.static(appBundleFolder));
    app.get('*', (req, res) => {
      console.log("going to the app, not the API", path.join(appBundleFolder, 'index.html'))
      res.sendFile(path.join(appBundleFolder, 'index.html'))
    })
  // when not in production, add a "ping" route
  } else {
    app.get('/api/ping', (req, res) => res.json("pong"))
  }
  
  // make the server listen to requests
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`)
  })

})
