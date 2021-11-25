import { FC, InputHTMLAttributes } from "react"
import styled from "styled-components"
import { Field } from "formik"

import { getColor } from "GlobalStyles/cssVar"

type InputProps = InputHTMLAttributes<HTMLInputElement>
export interface TextInputProps extends InputProps {
}

const StyledTextInput = styled.input<TextInputProps>`
  border-radius: 4px;
  color: ${getColor("secondary")};
`

export const TextInput: FC<TextInputProps> = ({
  ...props
}) => {
  return (
    <Field
      type="input"
      {...props}
      as={StyledTextInput}
    />
  )
}

export default TextInput
