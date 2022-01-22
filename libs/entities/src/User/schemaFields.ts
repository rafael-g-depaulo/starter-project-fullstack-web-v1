import { Roles } from "@starter-project/permissions"
import { mixed, string } from "yup"

// fields
export const id = string().required().min(10).max(10) //.uuid()
export const email = string().required().email()
export const password = string().required().min(6)
export const role = mixed<Roles>().required().oneOf(Object.values(Roles))
export const passwordConfirmation = string().required().test('passwords-match', 'Senhas não são iguais', function(value) {
  return this.parent.password === value
})

export const profilePictureUrl = string().optional().url()
