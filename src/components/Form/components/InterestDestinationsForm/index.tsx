import { AirplaneTakeoff } from 'phosphor-react'
import { useFetch } from '../../../../hooks/useFetch'

import { FieldLocations } from '../FieldLocations'
import { InterestDestinationsFormContainer } from './styles'

export function InterestDestinationsForm() {
  const { country, city } = useFetch(
    'https://amazon-api.sellead.com/country',
    'https://amazon-api.sellead.com/city',
  )

  return (
    <InterestDestinationsFormContainer>
      <h2>
        Destino de interesse
        <AirplaneTakeoff size={35} weight="fill" />
      </h2>
      <FieldLocations
        name="country"
        labelContent="País"
        type="text"
        placeholder="Brasil"
        listLocations={country}
      />
      <FieldLocations
        name="city"
        labelContent="Cidade"
        type="text"
        placeholder="São Paulo"
        listLocations={city}
      />
    </InterestDestinationsFormContainer>
  )
}
