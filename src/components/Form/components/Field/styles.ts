import styled from 'styled-components'

export const FieldContainer = styled.div`
  width: 100%;
  max-width: 20rem;

  input {
    &:focus {
      color: ${(props) => props.theme.white};
      outline: ${(props) => props.theme.white};
    }
  }
`
