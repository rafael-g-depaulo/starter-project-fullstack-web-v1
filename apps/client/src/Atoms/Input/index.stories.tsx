import { storiesOf } from "@storybook/react"
import { Form, Formik, FormikValues } from "formik"
import React from "react"

import TextInput from "./Text"

const wrap = (ele: React.ReactNode, obj: FormikValues) => <Formik onSubmit={()=>{}} initialValues={obj}><Form>{ele}</Form></Formik>

storiesOf("Atoms/Text Inputs", module)
  .add("default Text", () => wrap(<TextInput name="simpleText" placeholder="simpleText" />, { simpleText: "" }))
