import { AirplaneTakeoff } from 'phosphor-react'
import { InterestDestinationsFormContainer } from './styles'

export function InterestDestinationsForm() {
  return (
    <InterestDestinationsFormContainer>
      <h2>
        Destino de interesse
        <AirplaneTakeoff size={32} weight="fill" />
      </h2>
      <input type="text" placeholder="País" required />
      <input type="text" placeholder="Cidade" required />
    </InterestDestinationsFormContainer>
  )
}
