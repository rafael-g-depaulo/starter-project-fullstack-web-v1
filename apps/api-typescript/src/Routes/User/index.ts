import express, { Request, Response } from "express"
import { getCustomRepository } from "typeorm"

import { Router } from "Routes"

import User from "Db/Entities/User"
import { UserRepository } from "Db/Repository/UserRepository"

type UserDeps = {
  UserRepo?: UserRepository,
}

const UserRouter: Router<UserDeps> = (deps, options) => {
  const {
    UserRepo = getCustomRepository(UserRepository)
  } = deps
  
  return express.Router(options)
    .get('/', (_, res) => res.json({ msg: "ASDSADFSDFSD" }))
    .post('/register', async (req: Request<{}, {}, User>, res: Response) => {
      const { firstName, lastName, age } = req.body

      const user = UserRepo.create({
        firstName,
        lastName,
        age,
      })

      await UserRepo.save(user)

      return res.json({ user })
    })
    .get('/:uuid', async (req, res) => {

      const userId = req.params.uuid
      
      const user = await UserRepo.findOne(userId, { relations: ['bestFriend'] })

      res.json({ user })
    })
    .post('/:uuid/addBestFriend', async (req: Request<{ uuid: string }, {}, { friendId: string }>, res) => {

      const [user, usersFriend] = await Promise.all([
        UserRepo.findOne(req.params.uuid),
        UserRepo.findOne(req.body.friendId),
      ])

      if (!user || !usersFriend)
        return res.json({ msg: "user not found" })

      user.bestFriend = usersFriend
      await UserRepo.save(user)

      return res.json({ user, usersFriend: user.bestFriend })
    })
}
export default UserRouter
