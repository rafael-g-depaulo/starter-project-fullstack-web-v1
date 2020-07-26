import UserModel from "Models/User"
import { errorLog } from "Utils/log"

export const register = ({ User = UserModel }) => async (req, res, next) => {

  const { email, password, name } = req.body

  if (!email || !password || !name)
    return res
      .status(400)
      .send({ error: "incomplete request body" })

  User
    .create({
      email,
      password,
      name,
    })
    .then(user => {
      const userObject = user.dataValues
      delete userObject.password
      res.status(200).json({ user: userObject })
    })
    .catch(error => {
      const { name, errors, sql } = error
      const { message, type } = errors[0]
      errorLog("USER CREATION", {
        name,
        message,
        SQL: sql,
        type,
      })
      res.status(400).json({
        error: message,
      })
    })
}

export default register
