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

      let pHash
      try {
        pHash = await createHash(password)
      } catch (error) {
        console.error("ERROR IN USER CREATION:", error.errors)
        return res
          .status(422)
          .send( { error: "An error occurred while registering" })
      }
        
      let user
      try {
        user = await User.create({
          email,
          password: pHash,
          name,
        })
      } catch (error) {
        const { name, errors, sql } = error
        const { message, type } = errors[0]

        errorLog("USER CREATION", {
          name,
          message,
          SQL: sql,
          type,
        })

        return res.status(400).send({
          error: message,
        })
      }

      const userObject = user.dataValues
      delete userObject.password

      return res
        .status(200)
        .json({ user: userObject })

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
