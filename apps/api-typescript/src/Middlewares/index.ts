// import cors from "./cors"
import bodyParser from "body-parser"
import { Express } from 'express'
// import cookieParser from "cookie-parser"

export default (app: Express) => {

  // // to allow cors from desirable origins
  // app.use(cors)

  // // To parse cookies from the HTTP Request
  // app.use(cookieParser())

  // body parser to parse http requests' bodies
  app.use(bodyParser.json({}))
  app.use(bodyParser.urlencoded({ extended: true }))

}
