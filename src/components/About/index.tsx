import * as Dialog from '@radix-ui/react-dialog'
import { Form } from '../Form'

import { Galley } from './components/Gallery'
import { AboutContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <h1>Marque sua viagem</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Cadastrar</button>
        </Dialog.Trigger>
        <Form />
      </Dialog.Root>
      <Galley />
    </AboutContainer>
  )
}
