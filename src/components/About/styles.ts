import styled from 'styled-components'

export const AboutContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['gray-900']};

    font-size: 1.8rem;
  }
`
