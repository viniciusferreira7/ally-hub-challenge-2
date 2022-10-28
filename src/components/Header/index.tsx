import { HeaderContainer } from './styles'
import LogoAllyHub from '../../assets/logo-ally-hub.png'

export function Header() {
  return (
    <HeaderContainer>
      <a href="https://allyhub.co/" target="_blank" rel="noopener noreferrer">
        <img src={LogoAllyHub} alt="Logo da Ally Hub" />
      </a>
    </HeaderContainer>
  )
}
