import { verify } from "Utils/jwt"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token

  // if there is no token provided, return error
  if (!token) {
    console.log("\n[ERROR] No token provided.\n")
    return res.status(403).json({ error: "No token provided." })
  }

  verify(token)
    .then(decoded => {
      req.decoded = decoded
      next()
    })
    .catch(err => {
      console.log("\n[ERROR]", err.message)
      res.status(401).json({ error: "Unauthorized access." })
    })
}
