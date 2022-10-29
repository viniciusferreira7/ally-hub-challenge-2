import { PaperPlaneTilt } from 'phosphor-react'
import { InterestDestinationsForm } from './components/InterestDestinationsForm'
import { PersonalDataForm } from './components/PersonalDataForm'
import { ButtonContainer, FormContainer, Overlay } from './styles'

import * as Dialog from '@radix-ui/react-dialog'

export function Form() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content>
        <FormContainer>
          <PersonalDataForm />
          <InterestDestinationsForm />
          <ButtonContainer type="submit">
            Enviar <PaperPlaneTilt size={25} weight="fill" />
          </ButtonContainer>
        </FormContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
