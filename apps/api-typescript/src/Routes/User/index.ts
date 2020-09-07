import User from "Db/Entities/User"
import express, { Request, Response } from "express"
import { Router } from "Routes"

type UserDeps = {
}

const UserRouter: Router<UserDeps> = ({}, options) => express.Router(options)
  .get('/', (_, res) => res.json({ msg: "ASDSADFSDFSD" }))
  .post('/register', async (req: Request<{}, {}, User>, res: Response) => {
    const { firstName, lastName, age } = req.body

    const user = User.create({
      firstName,
      lastName,
      age,
    })

    await user.save()

    return res.json({ user })
  })
  .get('/:uuid', async (req, res) => {

    const userId = req.params.uuid

    const user = await User.findOne(userId)

    res.json({ user })
  })

export default UserRouter
