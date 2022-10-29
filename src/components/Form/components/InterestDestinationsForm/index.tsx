import { AirplaneTakeoff, X } from 'phosphor-react'
import { CloseButton } from '../../styles'
import { InterestDestinationsFormContainer } from './styles'

export function InterestDestinationsForm() {
  return (
    <InterestDestinationsFormContainer>
      <CloseButton>
        <X size={25} />
      </CloseButton>
      <h2>
        Destino de interesse
        <AirplaneTakeoff size={35} weight="fill" />
      </h2>
      <input type="text" placeholder="País" required />
      <input type="text" placeholder="Cidade" required />
    </InterestDestinationsFormContainer>
  )
}
