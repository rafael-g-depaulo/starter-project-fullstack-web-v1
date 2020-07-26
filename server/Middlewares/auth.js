import { verifyToken } from "Utils/jwt"
import User from "Models/user"
import { errorLog } from "Utils/log"

export const checkJwt = (req, res, next) => {
  const token = req.cookies.token

  // if there is no token provided, return error
  if (!token) {
    console.log("\n[ERROR] No token provided.\n")
    return res.status(403).json({ error: "No token provided." })
  }

  verifyToken(token)
    .then(decoded => {
      req.userId = decoded.id
      next()
    })
    .catch(err => {
      console.log("\n[ERROR]", err.message)
      res.status(401).json({ error: "Acesso não-autorizado." })
    })
}

export const getUser = (req, res, next) => {
  if (!req.userId) {
    console.log("ERROR used getUser without first checking JWT.")
    return res.status(401).json({ error: "Acesso não-autorizado" })
  }

  User.findByPk(req.userId)
    .then(user => {
      req.user = user
      next()
    })
    .catch(err => {
      console.log(err)
      errorLog("GETUSER MIDDLEWARE", {})
      res.status(401).json({ error: "Acesso não-autorizado" })
    })
}

export default checkJwt
