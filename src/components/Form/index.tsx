import { InterestDestinationsForm } from './components/InterestDestinationsForm'
import { PersonalDataForm } from './components/PersonalDataForm'
import { ButtonContainer, FormContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <PersonalDataForm />
      <InterestDestinationsForm />
      <ButtonContainer type="submit">Enviar</ButtonContainer>
    </FormContainer>
  )
}
