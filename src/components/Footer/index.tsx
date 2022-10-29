import { Browser, GithubLogo, LinkedinLogo } from 'phosphor-react'
import { FooterContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <LinkedinLogo size={35} weight="fill" />
      </a>
      <a
        href="https://github.com/viniciusferreira7"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <GithubLogo size={35} weight="fill" />
      </a>
      <a
        href="https://portfolio-website-omega-rust.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        title="Portfolio"
      >
        <Browser size={35} weight="fill" />
      </a>
    </FooterContainer>
  )
}
