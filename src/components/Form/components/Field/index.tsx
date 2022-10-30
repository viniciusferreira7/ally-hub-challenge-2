import { FieldContainer } from './styles'

import { useFormContext } from 'react-hook-form'
import MaskedInput from 'react-text-mask'

interface FieldProps {
  name: string
  type: string
  placeholder: string
  labelContent: string
  mask?: Array<string | RegExp> | false
}

export function Field({
  name,
  type,
  placeholder,
  labelContent,
  mask,
}: FieldProps) {
  const { register } = useFormContext()

  const regexMask = !mask ? false : mask

  return (
    <FieldContainer>
      <label htmlFor={name}>{labelContent}</label>
      <MaskedInput
        mask={regexMask}
        {...register(name)}
        id={name}
        type={type}
        placeholder={placeholder}
        required
      />
    </FieldContainer>
  )
}
