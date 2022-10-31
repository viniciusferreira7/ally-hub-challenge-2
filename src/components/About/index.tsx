import { Form } from '../Form'
import { Description } from './components/Description'

import { Galley } from './components/Gallery'
import { AboutContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <Description />
      <Form />
      <Galley />
    </AboutContainer>
  )
}
