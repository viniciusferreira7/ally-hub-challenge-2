import { IdentificationBadge, X } from 'phosphor-react'
import { CloseButton } from '../../styles'
import { PersonalDataFormContainer } from './styles'

export function PersonalDataForm() {
  return (
    <PersonalDataFormContainer>
      <CloseButton>
        <X size={25} />
      </CloseButton>
      <h2>
        Dados pessoais
        <IdentificationBadge size={35} weight="fill" />
      </h2>
      <input type="text" placeholder="Nome" required />
      <input type="text" placeholder="CPF" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Telefone" required />
    </PersonalDataFormContainer>
  )
}
