import { FC } from "react"

import InputGroup, { InputGroupProps } from "Atoms/Input/InputGroup"
import PasswordInput from "Atoms/Input/Password"
import Label from "Atoms/Input/Label"

export interface TextInputGroupProps extends InputGroupProps {
  name: string
  label: string
}

export const TextInputGroup: FC<TextInputGroupProps> = ({
  label,
  name,
  ...props
}) => {
  return (
    <InputGroup {...props}>
      <Label htmlFor={name}>{label}</Label>
      <PasswordInput name={name} id={name} />
    </InputGroup>
  )
}

export default TextInputGroup
