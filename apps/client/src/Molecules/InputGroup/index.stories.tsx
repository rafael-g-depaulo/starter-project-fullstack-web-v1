import { storiesOf } from "@storybook/react"
import { Form, Formik, FormikValues } from "formik"

import TextInputGroup from "./Text"

const wrap = (ele: React.ReactNode, obj: FormikValues) => <Formik onSubmit={()=>{}} initialValues={obj}><Form>{ele}</Form></Formik>

storiesOf("Molecules/Input Groups", module)
  .add("Text Input", () => wrap(
    <TextInputGroup name="name" label="Insira nome aqui" />
  , { name: "" }))
