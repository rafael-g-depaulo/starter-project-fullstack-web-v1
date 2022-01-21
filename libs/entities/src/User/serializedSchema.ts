import { Asserts, object } from "yup"

import { email, id, role } from "./schemaFields"

// serialized user
export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = object({
  id,
  email,
  role,
})
