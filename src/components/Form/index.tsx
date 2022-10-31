import { InterestDestinationsForm } from './components/InterestDestinationsForm'
import { PersonalDataForm } from './components/PersonalDataForm'
import { ButtonContainer, FormContainer } from './styles'

import { PaperPlaneTilt } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

const formSchemaValidation = zod.object({
  name: zod.string().min(1, '* Nome obrigatório'),
  cpf: zod.string().min(1, '* CPF obrigatório'),
  email: zod.string().min(1, '* Email obrigatório'),
  telephone: zod.string().min(11, '* Telefone obrigatório'),
  country: zod.union([
    zod.string().min(1, '* País obrigatório'),
    zod.string().array().min(1, '* País obrigatório'),
  ]),
  city: zod.union([
    zod.string().min(1, '* Cidade obrigatório'),
    zod.string().array().min(1, '* Cidade obrigatório'),
  ]),
})

type formData = zod.infer<typeof formSchemaValidation>

export function Form() {
  const reactForm = useForm<formData>({
    resolver: zodResolver(formSchemaValidation),
    defaultValues: {
      name: '',
      cpf: '',
      email: '',
      telephone: '',
      country: '',
      city: '',
    },
  })

  const { handleSubmit, reset } = reactForm

  function handleSubmitForm() {
    reset()
    setTimeout(() => {
      window.open('https://allyhub.co/')
    }, 1000)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <FormProvider {...reactForm}>
        <PersonalDataForm />
        <InterestDestinationsForm />
        <ButtonContainer type="submit" title="Enviar">
          Enviar <PaperPlaneTilt size={25} weight="fill" />
        </ButtonContainer>
      </FormProvider>
    </FormContainer>
  )
}
