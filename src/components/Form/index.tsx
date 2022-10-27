import { InterestDestinationsForm } from './components/InterestDestinationsForm'
import { PersonalDataForm } from './components/PersonalDataForm'
import { FormContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <PersonalDataForm />
      <InterestDestinationsForm />
      <button type="submit">Enviar</button>
    </FormContainer>
  )
}
