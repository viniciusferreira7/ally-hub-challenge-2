import { ButtonContainer, DescriptionContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Description() {
  return (
    <DescriptionContainer>
      <h1>Marque sua viagem</h1>
      <p>Nos conte países e cidades que você gostaria de viajar</p>
      <Dialog.Trigger asChild>
        <ButtonContainer type="button" title="Cadastrar">
          Cadastrar
        </ButtonContainer>
      </Dialog.Trigger>
    </DescriptionContainer>
  )
}
