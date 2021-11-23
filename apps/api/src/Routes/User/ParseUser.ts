import { createUserSchema, UserCreation } from "@starter-project/user"
import ParseBody from "Middlewares/parseBody"

export interface ParsedUser {
  user_info: UserCreation
}

export const ParseUser = ParseBody(createUserSchema, "user_info")

export default ParseUser
