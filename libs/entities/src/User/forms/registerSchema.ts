import { Asserts, object } from "yup"

import { email, password, passwordConfirmation } from "../schemaFields"
import { SerializedUser } from "../serializedSchema"

// register
export interface UserRegister extends Asserts<typeof registerUserSchema> {}
export const registerUserSchema = object({
  email,
  password,
  passwordConfirmation,
})

export interface UserRegisterReturn extends SerializedUser {}
