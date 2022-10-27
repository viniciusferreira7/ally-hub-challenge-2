import { HeaderContainer } from './styles'
import LogoAllyHub from '../../assets/logo-ally-hub.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoAllyHub} alt="Logo da Ally Hub" />
    </HeaderContainer>
  )
}
