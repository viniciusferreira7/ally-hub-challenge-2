import * as Dialog from '@radix-ui/react-dialog'

import { Galley } from './components/Gallery'
import { AboutContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <h1>Marque sua viagem</h1>
      <Dialog.Root>
        <Dialog.Trigger />
      </Dialog.Root>
      <Galley />
    </AboutContainer>
  )
}
