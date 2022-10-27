import { InterestDestinationsFormContainer } from './styles'

export function InterestDestinationsForm() {
  return (
    <InterestDestinationsFormContainer>
      <h2>Destino de interesse</h2>
      <input type="text" placeholder="País" required />
      <input type="text" placeholder="Cidade" required />
    </InterestDestinationsFormContainer>
  )
}
