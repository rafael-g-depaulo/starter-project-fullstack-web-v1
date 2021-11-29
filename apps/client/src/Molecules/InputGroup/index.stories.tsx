import { storiesOf } from "@storybook/react"
import { Form, Formik, FormikValues } from "formik"

import TextInputGroup from "./Text"
import EmailInputGroup from "./Email"
import PasswordInputGroup from "./Password"

const wrap = (ele: React.ReactNode, obj: FormikValues) => <Formik onSubmit={()=>{}} initialValues={obj}><Form>{ele}</Form></Formik>

storiesOf("Molecules/Input Groups", module)
  .add("Text Input", () => wrap(
    <TextInputGroup name="name" label="Insira nome aqui" placeholder="nome" />
  , { name: "" }))
  .add("Email Input", () => wrap(
    <EmailInputGroup name="email" label="Email" placeholder="email" />
  , { password: "" }))
  .add("Password Input", () => wrap(
    <PasswordInputGroup name="password" label="Senha" placeholder="senha" />
  , { password: "" }))
