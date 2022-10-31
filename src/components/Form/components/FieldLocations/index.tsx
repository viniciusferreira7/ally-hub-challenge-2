import { Autocomplete, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FieldLocationsContainer } from './styles'

interface CountryType {
  code: string
  name: string
  name_ptbr: string
}

export interface CityType {
  id: number
  code: string
  name: string
  country_code: string
  created_at: string
  updated_at: string
  name_ptbr: string
  lat: string
  log: string
  url1: null | string
  url2: null | string
}

interface FieldLocationsProps {
  name: string
  type: string
  labelContent: string
  placeholder: string
  listLocations: CountryType[] | CityType[]
}

export function FieldLocations({
  name,
  type,
  labelContent,
  placeholder,
  listLocations,
}: FieldLocationsProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const [openLoading, setOpenLoading] = useState(false)

  const loading = openLoading && listLocations.length === 0

  return (
    <FieldLocationsContainer>
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          render={(props) => (
            <Autocomplete
              fullWidth
              multiple
              limitTags={3}
              id="tags-outlined"
              loading={loading}
              open={openLoading}
              onOpen={() => {
                setOpenLoading(true)
              }}
              onClose={() => {
                setOpenLoading(false)
              }}
              options={listLocations.map((item) => {
                return item.name
              })}
              filterSelectedOptions
              onChange={(e, newValue) => props.field.onChange(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
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
          )}
        />
      </FormControl>
    </FieldLocationsContainer>
  )
}
