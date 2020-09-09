import { Middleware } from "Middlewares"
import _cors from "cors"

export const setupAllowedOrigins = () => {
  let allowedOrigins = []

  // if not in production, accept all requests from localhost
  if (process.env.NODE_ENV !== "production") {
    allowedOrigins.push(/localhost/)
  }
  
  // if CORS_REGEX env is set, add it to allowedOrigins
  if (!!process.env.CORS_REGEX) {
    const flags = process.env.CORS_REGEX_FLAGS ?? ""
    allowedOrigins.push(new RegExp(process.env.CORS_REGEX, flags))
  }

  return allowedOrigins
}

export const cors: () => Middleware = () => {
  const allowedOrigins = setupAllowedOrigins()
  return _cors({
    origin:(origin, callback) => {
      // return callback(null, true) //shortcircuit the whole shebang

      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true)

      // allow request from allowed origins
      if (!allowedOrigins.some(regex => regex.test(origin))) {
        const msg = "The CORS policy for this site does not allow access from the specified Origin."
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
    credentials: true,
  })
}

export default cors