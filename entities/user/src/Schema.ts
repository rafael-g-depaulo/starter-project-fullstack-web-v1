import { Asserts, object, string } from "yup"

export interface UserLogin extends Asserts<typeof loginUserSchema> {}
export const loginUserSchema = object({
  email: string().required().email(),
  password: string().required().min(6),
})

export interface UserSignup extends Asserts<typeof createUserSchema> {}
export const createUserSchema = loginUserSchema.shape({
})

export interface UserSignupFront extends Asserts<typeof createUserSchemaFront> {}
export const createUserSchemaFront = createUserSchema.shape({
  passwordConfirmation: string().test('passwords-match', function(value) {
    return this.parent.password === value
  })
})

export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = createUserSchema.shape({
  id: string().required().uuid().min(10).max(10),
})
