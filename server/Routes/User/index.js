import { Router } from 'express'
import { hash } from 'Utils/hashPwd'
import UserModel from "Models/user"
import { errorLog } from 'Utils/log'

export default ({ hashFunc = hash, User = UserModel }, options) => {
  return Router(options)
    .post("/register", async (req, res) => {
      const { email, password, name } = req.body

      if (!email || !password || !name)
        return res
          .status(400)
          .send({ error: "incomplete request body" })

      let pHash
      try {
        pHash = await hashFunc(password)
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

        return res.status(422).send({
          error: message,
        })
      }

      const userObject = user.dataValues
      delete userObject.password

      return res
        .status(200)
        .json({ user: userObject })

    })
    .get("/current", (req, res) => {})
    .post("/login", (req, res) => {})
}
