import { PersonalDataFormContainer } from './styles'

export function PersonalDataForm() {
  return (
    <PersonalDataFormContainer>
      <h2>Dados pessoais</h2>
      <input type="text" placeholder="Nome" required />
      <input type="text" placeholder="CPF" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Telefone" required />
    </PersonalDataFormContainer>
  )
}
