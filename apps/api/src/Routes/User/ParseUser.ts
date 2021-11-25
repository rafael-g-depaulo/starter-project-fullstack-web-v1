import { createUserSchema, UserSignup } from "@starter-project/user"
import ParseBody from "Middlewares/parseBody"

export interface ParsedUser {
  user_info: UserSignup
}

export const ParseUser = ParseBody(createUserSchema, "user_info")

export default ParseUser
