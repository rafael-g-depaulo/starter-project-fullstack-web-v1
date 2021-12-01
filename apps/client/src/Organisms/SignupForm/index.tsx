import { FC } from "react"
import { Formik, Form } from "formik"

import { registerUserSchema, UserRegister } from "@starter-project/entities"
import { useSignup } from "Api/User"

import EmailInputGroup from "Molecules/InputGroup/Email"
import PasswordInputGroup from "Molecules/InputGroup/Password"
import { useFormikSubmit } from "Utils/formik"

export interface SignupFormProps {
  
}

const initialValues: UserRegister = {
  email: "",
  password: "",
  passwordConfirmation: "",
}

export const SignupForm: FC<SignupFormProps> = () => {
  const { mutateAsync, error, data, isSuccess } = useSignup()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={useFormikSubmit(mutateAsync)}
      validationSchema={registerUserSchema}
    >
      {({ values, errors }) => (
        <Form>
          <EmailInputGroup
            label="Email:"         
          />

          <PasswordInputGroup
            label="Senha:"
            name="password"
          />

          <PasswordInputGroup
            label="Senha:"
            name="passwordConfirmation"
          />

          <pre>values: {JSON.stringify(values, null, 2)}</pre>
          <pre>errors: {JSON.stringify({ ...errors, api: error}, null, 2)}</pre>
          <pre>registered? {JSON.stringify(isSuccess)}</pre>
          <pre>return data: {JSON.stringify(data, null, 2)}</pre>
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default SignupForm
