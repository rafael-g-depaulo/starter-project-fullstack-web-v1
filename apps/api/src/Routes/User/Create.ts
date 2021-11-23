import UserRepository from "Repository/UserRepository"

import {
  createdSuccessfully,
  badRequestError,
  databaseError,
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import { ParsedUser } from "./ParseUser"

interface CreateUserDeps {
  UserRepo: UserRepository
}

export const CreateUser: (
  deps: CreateUserDeps
) => RouteHandler<
  Req<{}, ParsedUser>
> = ({ UserRepo }: CreateUserDeps) => async (req, res) => {
  const { user_info } = req

  // semantic validation
  if (await UserRepo.userExistsWithEmail(user_info!.email))
    return badRequestError(res, "Email address already exists.")

  // create and return user
  return UserRepo.createUser(user_info!)
    // .then((user) => { sendConfirmationEmail(user); return user })
    .then((user) => {
      // remove password and send user back
      let { password_hash: _, ...newUser } = user
      return createdSuccessfully(res, newUser)
    })
    .catch((err) => databaseError(res, "Error trying to create user.", err))
  
}
export default CreateUser
