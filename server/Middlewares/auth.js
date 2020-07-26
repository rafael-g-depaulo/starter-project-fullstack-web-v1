import { verifyToken } from "Utils/jwt"
import User from "Models/User"
import { errorLog } from "Utils/log"

export const checkJwt = (req, res, next) => {
  const token = req.cookies.token

  // if there is no token provided, return error
  if (!token)
    return res.status(403).json({ error: "no token provided." })

  verifyToken(token)
    .then(decoded => {
      req.userId = decoded.id
      next()
    })
    .catch(err => {
      res.status(401).json({ error: "Acesso não-autorizado." })
    })
}

export const getUser = async (req, res, next) => {
  if (!req.userId) {
    errorLog("GETUSER MIDDLEWARE", { msg: "used getUser without first checking JWT" })
    return res.status(401).json({ error: "Acesso não-autorizado" })
  }

  const user = await User.findByPk(req.userId)

  if (!user) {
    return res.status(401).json({ error: "Acesso não-autorizado" })
  }

  req.user = user
  next()
}

export default checkJwt
