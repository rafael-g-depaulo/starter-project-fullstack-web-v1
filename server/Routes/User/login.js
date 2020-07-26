import UserModel from 'Models/user'
import { errorLog } from 'Utils/log'
import { createToken } from 'Utils/jwt'

export const login = ({ User = UserModel }) => async (req, res, next) => {

  const { email, password } = req.body

  if (!email || !password) return res
    .status(400)
    .send({ error: "incomplete request body" })

  try {
    const user = await User.findOne({ where: { email } })

    // if user with that email not found, return 401
    if (!user) return res
      .status(401)
      .json({ msg: "email e/ou senha inválidos" })

    // check if passwords match
    const passwordsMatch = await user.checkPassword(password)
    if (!passwordsMatch) return res
      .status(401)
      .json({ msg: "email e/ou senha inválidos" })
    
    const token = createToken({ email: user.email, id: user.id })
      
    // all ok, user logged in
    const userObj = user.dataValues
    delete userObj.password
    delete userObj.createdAt
    delete userObj.updatedAt
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({ user: userObj })

  } catch (error) {
    errorLog("USER LOGIN PASSWORD HASH", error)
    return res.status(401).send({
      error: "email e/ou senha inválidos",
    })
  }
}

export default login
