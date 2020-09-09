import { NextFunction, Request, Response, Express } from 'express'

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "./cors"

export type Middleware = (req: Request, res: Response, next: NextFunction) => void

export default (app: Express) => {

  // to allow cors from desirable origins
  app.use(cors() as Middleware)
  
  // To parse cookies from the HTTP Request
  app.use(cookieParser() as Middleware)

  // body parser to parse http requests' bodies
  app.use(bodyParser.json({}) as Middleware)
  app.use(bodyParser.urlencoded({ extended: true }) as Middleware)

}
