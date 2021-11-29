import { FC } from "react"

import InputGroup, { InputGroupProps } from "Atoms/Input/InputGroup"
import TextInput from "Atoms/Input/Text"
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
      <TextInput name={name} id={name} />
    </InputGroup>
  )
}

export default TextInputGroup
