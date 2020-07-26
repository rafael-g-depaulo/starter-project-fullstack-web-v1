import { Router } from 'express'

// Middlewares used
import { checkJwt, getUser } from "Middlewares/auth"

// Models used
import UserModel from "Models/user"

// Route handlers
import register from './register'
import currentUserRoute from './current'
import login from './login'

export default ({
  User = UserModel,
}, options) => {
  return Router(options)
    .post("/register", register({ User }))
    .get("/current", checkJwt, getUser, currentUserRoute)
    .post("/login", login({ User }))
}
