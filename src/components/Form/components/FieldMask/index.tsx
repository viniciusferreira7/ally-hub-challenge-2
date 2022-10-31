import { FieldMaskContainer } from './styles'

import { FormControl, TextField } from '@mui/material'
import InputMask from 'react-input-mask'
import { Controller, useFormContext } from 'react-hook-form'

interface FieldMaskProps {
  name: string
  type: string
  labelContent: string
  placeholder: string
  mask?: 'cpf' | 'telephone'
}

export function FieldMask({
  name,
  type,
  labelContent,
  placeholder,
  mask,
}: FieldMaskProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const maskFormatted = mask === 'cpf' ? '999.999.999-99' : '(99) 99999-9999'

  return (
    <FieldMaskContainer>
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          render={(props) => (
            <InputMask
              mask={maskFormatted}
              disabled={false}
              value={props.field.value}
              onChange={props.field.onChange}
            >
              <TextField
                variant="filled"
                type={type}
                label={labelContent}
                placeholder={placeholder}
                error={!!errors[name]?.message}
                helperText={
                  errors[name]?.message ? `${errors[name]?.message}` : ''
                }
              />
            </InputMask>
          )}
        />
      </FormControl>
    </FieldMaskContainer>
  )
}
