// import express (after npm install express)
import express from 'express'

// create new express app and save it as "app"
const app = express()

// server configuration
const PORT = process.env.PORT

// import routes of API
import Router from './routes'

// load DB connection
import models from './db/models'
models.sequelize.sync().then(() => {
  app.use('/', Router(models))

  // create a route for the app
  app.get('/', (req, res) => {
    res.json({
      message: "this is my starter project for a Node.js API with a postgres server connection",
      PS: "please remember to set up env vars in ./.env (example is in ./env.example",
    })
  })
  
  // make the server listen to requests
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`)
  })
})
