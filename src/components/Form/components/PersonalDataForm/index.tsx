import { IdentificationBadge } from 'phosphor-react'
import { Field } from '../Field'
import { FieldMask } from '../FieldMask'
import { PersonalDataFormContainer } from './styles'

export function PersonalDataForm() {
  return (
    <PersonalDataFormContainer>
      <h2>
        Dados pessoais
        <IdentificationBadge size={35} weight="fill" />
      </h2>
      <Field
        name="name"
        type="text"
        labelContent="Nome"
        placeholder="John Doe"
      />
      <FieldMask
        mask="cpf"
        name="cpf"
        type="text"
        labelContent="CPF"
        placeholder="000.000.000-00"
      />
      <Field
        name="email"
        type="text"
        labelContent="Email"
        placeholder="johndoe@gmail.com"
      />
      <FieldMask
        mask="telephone"
        name="telephone"
        type="text"
        labelContent="Telefone"
        placeholder="+00 (00) 00000-0000"
      />
    </PersonalDataFormContainer>
  )
}
