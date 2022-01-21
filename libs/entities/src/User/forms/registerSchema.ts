import { Asserts, object } from "yup"

import { email, password, passwordConfirmation } from "../schemaFields"

// register
export interface UserRegister extends Asserts<typeof registerUserSchema> {}
export const registerUserSchema = object({
  email,
  password,
  passwordConfirmation,
})
