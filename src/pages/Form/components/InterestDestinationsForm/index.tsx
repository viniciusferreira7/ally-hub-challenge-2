import { InterestDestinationsFormContainer } from './styles'

export function InterestDestinationsForm() {
  return (
    <InterestDestinationsFormContainer>
      <input type="text" placeholder="País" required />
      <input type="text" placeholder="Cidade" required />{' '}
    </InterestDestinationsFormContainer>
  )
}
