import { InterestDestinationsForm } from './components/InterestDestinationsForm'
import { PersonalDataForm } from './components/PersonalDataForm'
import { ButtonContainer, FormContainer, Overlay } from './styles'

import { PaperPlaneTilt } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const formSchemaValidation = zod.object({
  name: zod.string(),
  cpf: zod.string(),
  email: zod.string(),
  telephone: zod.string(),
  country: zod.string(),
  city: zod.string(),
})

type formData = zod.infer<typeof formSchemaValidation>

export function Form() {
  const form = useForm<formData>({
    resolver: zodResolver(formSchemaValidation),
  })

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = form

  console.log(errors)

  function handleSubmitForm() {
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content>
        <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
          <FormProvider {...form}>
            <PersonalDataForm />
            <InterestDestinationsForm />
            <ButtonContainer type="submit" title="Enviar">
              Enviar <PaperPlaneTilt size={25} weight="fill" />
            </ButtonContainer>
          </FormProvider>
        </FormContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
