import { FieldContainer } from './styles'

import { FormControl, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface FieldProps {
  name: string
  type: string
  labelContent: string
  placeholder: string
}

export function Field({ name, type, labelContent, placeholder }: FieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <FieldContainer>
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          render={(props) => (
            <TextField
              variant="filled"
              type={type}
              label={labelContent}
              placeholder={placeholder}
              value={props.field.value}
              onChange={props.field.onChange}
              error={!!errors[name]?.message}
              helperText={
                errors[name]?.message ? `${errors[name]?.message}` : ''
              }
            />
          )}
        />
      </FormControl>
    </FieldContainer>
  )
}
