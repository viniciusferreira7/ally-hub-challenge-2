import * as Dialog from '@radix-ui/react-dialog'
import { Form } from '../Form'
import { Description } from './components/Description'

import { Galley } from './components/Gallery'
import { AboutContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <Dialog.Root>
        <Description />
        <Form />
      </Dialog.Root>
      <Galley />
    </AboutContainer>
  )
}
