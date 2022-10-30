import * as Dialog from '@radix-ui/react-dialog'
import { IdentificationBadge, X } from 'phosphor-react'

import { CloseButton } from '../../styles'
import { Field } from '../Field'
import { PersonalDataFormContainer } from './styles'

export function PersonalDataForm() {
  return (
    <PersonalDataFormContainer>
      <CloseButton>
        <X size={25} />
      </CloseButton>
      <Dialog.Title>
        Dados pessoais
        <IdentificationBadge size={35} weight="fill" />
      </Dialog.Title>
      <Field name="name" type="text" placeholder="Nome" labelContent="Nome" />
      <Field
        name="cpf"
        type="text"
        placeholder="000-000-000-00"
        labelContent="CPF"
        // mask={[
        //   /[0-9]/,
        //   /\d/,
        //   /\d/,
        //   '.',
        //   /[0-9]/,
        //   /\d/,
        //   /\d/,
        //   '.',
        //   /[0-9]/,
        //   /\d/,
        //   /\d/,
        //   '-',
        //   /[0-9]/,
        //   /\d/,
        // ]}
      />
      <Field
        name="telephone"
        type="text"
        placeholder="+00 (00) 00000-0000"
        labelContent="Telefone"
        // mask={[
        //   '+',
        //   /[1-9]/,
        //   /\d/,
        //   ' ',
        //   '(',
        //   /[1-9]/,
        //   /\d/,
        //   ')',
        //   ' ',
        //   /\d/,
        //   /\d/,
        //   /\d/,
        //   /\d/,
        //   /\d/,
        //   '-',
        //   /\d/,
        //   /\d/,
        //   /\d/,
        //   /\d/,
        // ]}
      />
    </PersonalDataFormContainer>
  )
}
