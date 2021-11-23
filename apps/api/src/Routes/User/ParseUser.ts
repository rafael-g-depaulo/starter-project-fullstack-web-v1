import { badRequestError } from "Utils/endpointReturns"
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

import { ValidationError } from "yup"
import { createUserSchema, UserCreation } from "@starter-project/user"

export interface ParsedUser {
  user_info: UserCreation
}

export const ParseUser: RouteHandler<Req<UserCreation, ParsedUser>> = (req, res, next) => {
  // validate user
  createUserSchema.validate(req.body, { stripUnknown: true, abortEarly: false })
    // if request body is good, go to next middleware
    .then(userInfo => {
      req.user_info = userInfo
      next()
    })
    // if bad request, return
    .catch((err: ValidationError) => badRequestError(res, err.message, err))
}

export default ParseUser
