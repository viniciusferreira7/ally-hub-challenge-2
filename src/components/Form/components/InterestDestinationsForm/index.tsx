import * as Dialog from '@radix-ui/react-dialog'
import { AirplaneTakeoff, X } from 'phosphor-react'

import { CloseButton } from '../../styles'
import { Field } from '../Field'
import { InterestDestinationsFormContainer } from './styles'

export function InterestDestinationsForm() {
  return (
    <InterestDestinationsFormContainer>
      <CloseButton>
        <X size={25} />
      </CloseButton>
      <Dialog.Title>
        Destino de interesse
        <AirplaneTakeoff size={35} weight="fill" />
      </Dialog.Title>
      <Field
        name="country"
        type="text"
        placeholder="País"
        labelContent="País"
      />
      <Field name="city" type="text" placeholder="City" labelContent="City" />
    </InterestDestinationsFormContainer>
  )
}
