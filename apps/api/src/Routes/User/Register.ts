import UserRepository from "Repository/UserRepository"

import {
  createdSuccessfully,
  badRequestError,
  databaseError,
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import { UserRegister } from "@starter-project/entities"

interface ReqBodyExtension {
  user_info: UserRegister
}

interface RegisterUserDeps {
  UserRepo: UserRepository
}

export const RegisterUser: (
  deps: RegisterUserDeps
) => RouteHandler<
  Req<{}, ReqBodyExtension>
> = ({ UserRepo }: RegisterUserDeps) => async (req, res) => {
  const { user_info } = req

  // semantic validation
  if (await UserRepo.userExistsWithEmail(user_info!.email))
    return badRequestError(res, "Email address already exists.")

  // create and return user
  return UserRepo.createUser(user_info!)
    // .then((user) => { sendConfirmationEmail(user); return user })
    .then(user => createdSuccessfully(res, user))
    .catch(err => databaseError(res, "Error trying to create user.", err))
  
}
export default RegisterUser
