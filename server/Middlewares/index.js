import cors from "./cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

export default app => {

  // to allow cors from desirable origins
  app.use(cors)

  // To parse cookies from the HTTP Request
  app.use(cookieParser())

  // body parser to parse http requests' bodies
  app.use(bodyParser.json({ extended: true }))
  app.use(bodyParser.urlencoded({ extended: true }))

}
