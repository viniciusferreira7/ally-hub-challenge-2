import { Header } from '../../componets/Header'
import { InterestDestinationsForm } from './components/InterestDestinationsForm'
import { PersonalDataForm } from './components/PersonalDataForm'
import { FormContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <Header />
      <PersonalDataForm />
      <InterestDestinationsForm />
    </FormContainer>
  )
}
