import { storiesOf } from "@storybook/react"
import { Form, Formik, FormikValues } from "formik"
import React from "react"
import InputGroup from "./InputGroup"

import TextInput from "./Text"
import Label from "./Label"

const wrap = (ele: React.ReactNode, obj: FormikValues) => <Formik onSubmit={()=>{}} initialValues={obj}><Form>{ele}</Form></Formik>

storiesOf("Atoms/Input Group", module)
  .add("with Text Input", () => wrap(
    <InputGroup>
      <Label htmlFor="name">Insert your name:</Label>
      <TextInput name="name" id="name" />
    </InputGroup>
  , { name: "" }))
