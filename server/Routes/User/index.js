import { Router } from 'express'
import UserModel from "Models/user"
import { hash, compare } from 'Utils/hash'
import { errorLog } from 'Utils/log'

export default ({ createHash = hash, compareHash = compare, User = UserModel }, options) => {
  return Router(options)
    .post("/register", async (req, res) => {
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
    })
    .get("/current", async (req, res) => {})
    .post("/login", async (req, res) => {

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
        const passwordsMatch = await compareHash(password, user.password)
        if (!passwordsMatch) return res
          .status(401)
          .json({ msg: "email e/ou senha inválidos" })
        
        // TODO: ADD JWT LOGIC
        // TODO: ADD JWT LOGIC
        // TODO: ADD JWT LOGIC
        // TODO: ADD JWT LOGIC
          
        // all ok, user logged in
        return res
          .status(200)
          .json({ msg: "tudo ok!!"})

      } catch (error) {
        errorLog("USER LOGIN PASSWORD HASH", error)
        return res.status(401).send({
          error: "email e/ou senha inválidos",
        })
      }
    })
}
