import UserRepository from "Repository/UserRepository"

import {
  createdSuccessfully,
  badRequestError,
  databaseError,
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import { removeCircularity } from "Utils/stringifyCircular"
import { UserInfo } from "Entities/User"

interface CreateUserDeps {
  UserRepo: UserRepository
}

export const CreateUser: (
  deps: CreateUserDeps
) => RouteHandler<
  Req<UserInfo>
> = ({ UserRepo }: CreateUserDeps) => async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return badRequestError(res, "Missing information for user creation.")

  const checkUserExists = await UserRepo.findByEmail(email)
  if (!!checkUserExists)
    return badRequestError(res, "Email address already exists.")

    return UserRepo.createUser(
      email,
      password,
    )
    //  .then((user) => {
    //     sendConfirmationEmail(user)
    //     return user
    //   })
      .then((user) => {
        // remove password and send user back
        let { password_hash: _, ...newUser } = user
        return createdSuccessfully(res, removeCircularity(newUser))
      })
      .catch((err) => databaseError(res, "Error trying to create user.", err))
  
}
export default CreateUser
