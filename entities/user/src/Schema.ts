import { Asserts, object, string } from "yup"

export interface UserCreation extends Asserts<typeof createUserSchema> {}
export const createUserSchema = object({
  email: string().required().email(),
  password: string().required().min(6),
})

export interface UserLogin extends UserCreation {}

export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = createUserSchema.shape({
  id: string().required().uuid().min(10).max(10),
})
