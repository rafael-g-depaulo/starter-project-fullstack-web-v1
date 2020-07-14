// import express (after npm install express)
import express from 'express'
import path from 'path'

// create new express app and save it as "app"
const app = express()

// get express middlewares
import cors from 'cors'

const allowedOrigins = [
  'http://localhost:3000',
]
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  }
}))

// server configuration
const PORT = process.env.PORT

// import routes of API
import Router from './routes'

// load DB connection
import db from './db'
db.sync().then(() => {
  app.use('/api', Router(db))

  // create a route for the app
  app.get('/api', (req, res) => {
    res.json({
      message: "this is my starter project for a Node.js API with a postgres server connection",
      PS: "please remember to set up env vars in ./.env (example is in ./env.example",
    })
  })

  // any requests that dont have an API path, map to react bundle
  app.use(express.static(path.join(__dirname, '/app/build')));
  app.get('*', (req, res) => {
    console.log("going to the app, not the API", path.join(__dirname, '/app/build', 'index.html'))
    res.sendFile(path.join(__dirname, '/app/build', 'index.html'))
  })
  
  // make the server listen to requests
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`)
  })
})
