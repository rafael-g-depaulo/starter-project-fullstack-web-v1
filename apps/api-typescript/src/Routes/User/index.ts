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

    const user = await User.findOne(userId, { relations: ['bestFriend'] })

    res.json({ user })
  })
  .post('/:uuid/addBestFriend', async (req: Request<{ uuid: string }, {}, { friendId: string }>, res) => {
    const user = await User.findOne(req.params.uuid)

    if (!user) return res.json({ msg: "user not found" })

    user.bestFriend = await User.findOne(req.body.friendId)

    await user.save()

    return res.json({ user, usersFriend: user.bestFriend })
  })

export default UserRouter
