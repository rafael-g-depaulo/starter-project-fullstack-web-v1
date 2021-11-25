import { FC, useCallback } from "react"
import { Formik, Form } from "formik"

import { createUserSchemaFront, UserSignupFront } from "@starter-project/user"
import TextInput from "Atoms/Input/Text"
import { useSignup } from "Api/User"

export interface SignupFormProps {
  
}

const initialValues: UserSignupFront = {
  email: "email@email",
  password: "",
  passwordConfirmation: "",
}

export const SignupForm: FC<SignupFormProps> = () => {
  const { mutate, error, data, status } = useSignup()
  const onSubmit = useCallback((info: UserSignupFront) => mutate(info), [])

  console.log({ status, error, data })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={createUserSchemaFront}
    >
      {({ values, errors }) => (
        <Form>
          <TextInput
            name="email"
            autoComplete="email"
          />
          <TextInput
            name="password"
            type="password"
          />
          <TextInput
            name="passwordConfirmation"
            type="password"
          />
          
          <pre>values: {JSON.stringify(values, null, 2)}</pre>
          <pre>errors: {JSON.stringify({ ...errors, api: error}, null, 2)}</pre>
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default SignupForm
