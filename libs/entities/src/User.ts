import { Roles } from "@starter-project/permissions"
import { Asserts, mixed, object, string,  } from "yup"

// fields
const id = string().required().min(10).max(10)
// const id = string().required().uuid().min(10).max(10)
const email = string().required().email()
const password = string().required().min(6)
const role = mixed<Roles>().required().oneOf(Object.values(Roles))
const passwordConfirmation = string().required().test('passwords-match', 'Senhas não são iguais', function(value) {
  return this.parent.password === value
})

// serialized user
export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = object({
  id,
  email,
  role,
})

// login
export interface UserLogin extends Asserts<typeof loginUserSchema> {}
export const loginUserSchema = object({
  email,
  password,
})
export interface UserLoginReturn {
  token: string
}

// register
export interface UserRegister extends Asserts<typeof registerUserSchema> {}
export const registerUserSchema = object({
  email,
  password,
  passwordConfirmation,
})
