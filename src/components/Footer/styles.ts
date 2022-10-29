import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 5rem;
  margin-top: 3rem;

  background: ${(props) => props.theme['blue-500']};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
`
