import { storiesOf } from "@storybook/react"
import { Form, Formik, FormikValues } from "formik"

import TextInput from "./Text"
import PasswordInput from "./Password"

const wrap = (ele: React.ReactNode, obj: FormikValues) => <Formik onSubmit={()=>{}} initialValues={obj}><Form>{ele}</Form></Formik>

storiesOf("Atoms/Text Inputs", module)
  .add("text", () => wrap(
    <TextInput name="simpleText" placeholder="simpleText" />
  , { simpleText: "" }))
  .add("password", () => wrap(
    <PasswordInput name="password" placeholder="password here" />
  , { simpleText: "" }))
